import {ResultCodesEnum, usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/Object-helpers";
import {UserType} from "../../types/types";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

type InitialStateType = typeof initialState

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of users ids
};

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: updateObjectInArray(state.users,
                    action.userId,
                    "id",
                    {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId,
                    "id",
                    {followed: false})
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            };
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
};

type ActionsTypes =
    FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    |
    SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingProgressActionType

type FollowSuccessActionType = { type: typeof FOLLOW, userId: number }
type UnfollowSuccessActionType = { type: typeof UNFOLLOW, userId: number }
type SetUsersActionType = { type: typeof SET_USERS, users: Array<UserType> }
type SetCurrentPageActionType = { type: typeof CURRENT_PAGE, currentPage: number }
type SetTotalUsersCountActionType = { type: typeof SET_TOTAL_USERS_COUNT, count: number }
type ToggleIsFetchingActionType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
type ToggleFollowingProgressActionType = { type: typeof TOGGLE_FOLLOWING_PROGRESS, isFetching: boolean, userId: number }

export let followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId});
export let unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId});
export let setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});
export let setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: CURRENT_PAGE, currentPage});
export let setTotalUsersCount = (count: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, count});
export let toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export let toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>

export const requestUsers = (page: number,
                             pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setCurrentPage(page));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
};

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any,
                                   actionCreator: (userId: number) => FollowSuccessActionType |
                                       UnfollowSuccessActionType) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId))
};

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
};

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
};


export default usersReducer;




