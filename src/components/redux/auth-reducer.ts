import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../../api/api"
import {FormAction, stopSubmit} from "redux-form"
import {BaseThunkType, InferActionsTypes} from "./redux-store"
import {authAPI} from "../../api/auth-api"
import {securityAPI} from "../../api/security-api"

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/AUTH/SET_USER_DATA':
        case 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null,
                       isAuth: boolean) => ({type: 'SN/AUTH/SET_USER_DATA',
        payload: {userId, email, login, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string,
                      rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        await dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl())
        }
        dispatch(stopSubmit("login", {_error: data.messages[0]}))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logoutThunk = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer

type ThunkType = BaseThunkType<ActionsType | FormAction>
type ActionsType = InferActionsTypes<typeof actions>
export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
    captchaUrl: string | null
}