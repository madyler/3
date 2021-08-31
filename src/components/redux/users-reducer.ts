import {ResultCodesEnum} from "../../api/api"
import {updateObjectInArray} from "../../utils/Object-helpers"
import {UserType} from "../../types/types"
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store"
import {Dispatch} from "redux"
import {usersApi} from "../../api/users-api"

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of users ids
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: updateObjectInArray(state.users,
                    action.userId,
                    "id",
                    {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId,
                    "id",
                    {followed: false})
            }
        case 'SET_USERS':
            return {
                ...state, users: action.users
            }
        case 'CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalUsersCount: action.count
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'TOGGLE_FOLLOWING_PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (count: number) => ({type: 'SET_TOTAL_USERS_COUNT', count} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({type: 'TOGGLE_FOLLOWING_PROGRESS',
        isFetching, userId} as const)
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true))
        let data = await usersApi.getUsers(page, pageSize)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setCurrentPage(page))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), actions.followSuccess)
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), actions.unfollowSuccess)
    }
}

export default usersReducer

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
type InitialStateType = typeof initialState



