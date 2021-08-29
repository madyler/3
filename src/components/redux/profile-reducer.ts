import {profileAPI, ResultCodesEnum} from "../../api/api";
import {PhotosType, PostType, ProfileType} from "../../types/types";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: 'Hello, do you really want it?', likesCount: 11},
        {id: 2, message: 'Yes, it\'s my first time!!!', likesCount: 28},
        {id: 3, message: 'I learn React by Dymych!', likesCount: 54},
        {id: 4, message: 'Congratulates!', likesCount: 2}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ""
};

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.post,
                likesCount: 0
            };
        {
            let stateCopy = {...state, posts: [...state.posts]}
            stateCopy.posts.push(newPost);
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
};

type AddPostActionCreatorActionType = { type: typeof ADD_POST, post: string }
type SetUserProfileActionType = { type: typeof SET_USER_PROFILE, profile: ProfileType }
type SetStatusActionType = { type: typeof SET_STATUS, status: string }
type DeletePostActionType = { type: typeof DELETE_POST, postId: number }
type SavePhotoSuccessActionType = { type: typeof SAVE_PHOTO_SUCCESS, photos: PhotosType }

export let addPostActionCreator = (value: string): AddPostActionCreatorActionType => ({type: ADD_POST, post: value});
export let setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
export let setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});
export let deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId});
export let savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfile(userId))
    } else {
        console.log("response:" + data.messages[0]);
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
        return Promise.reject(data.messages[0])
    }
};

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getUserStatus(userId);
    dispatch(setStatus(data));
};


export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        console.log(error.message)
    }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
};

export default profileReducer;




