import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hello, do you really want it?', likesCount: 11},
        {id: 2, message: 'Yes, it\'s my first time!!!', likesCount: 28},
        {id: 3, message: 'I learn React by Dymych!', likesCount: 54},
        {id: 4, message: 'Congratulates!', likesCount: 2}
    ],
    profile: null,
    status: ""

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.post,
                likesCount: 0
            };
        {
            let stateCopy = {...state, posts: [...state.posts]};
            stateCopy.posts.push(newPost);
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}
export let addPostActionCreator = (value) => ({type: ADD_POST, post: value});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export default profileReducer;




