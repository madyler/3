import {profileAPI, ResultCodesEnum} from "../../api/api";
import {PhotosType, PostType, ProfileType} from "../../types/types";
import {stopSubmit} from "redux-form";
import {InferActionsTypes} from "./redux-store";



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

const profileReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD_POST':
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
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'DELETE_POST': {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
};

type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    addPostActionCreator: (value: string)=> ({type: 'ADD_POST', post: value} as const),
    setUserProfile: (profile: ProfileType)=> ({type: 'SET_USER_PROFILE', profile} as const),
    setStatus: (status: string)=> ({type: 'SET_STATUS', status} as const),
    deletePost: (postId: number)=> ({type: 'DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType)=> ({type: 'SAVE_PHOTO_SUCCESS', photos} as const)
}



export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getUserProfile(userId);
    dispatch(actions.setUserProfile(data));
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
    dispatch(actions.setStatus(data));
};


export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setStatus(status));
        }
    } catch (error) {
        console.log(error.message)
    }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
};

export default profileReducer;




