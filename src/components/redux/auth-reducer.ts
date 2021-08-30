import {authAPI, ResultCodeForCaptchaEnum, ResultCodesEnum, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {InferActionsTypes} from "./redux-store";

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
    captchaUrl: string | null
}
let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>
export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null,
                       isAuth: boolean) => ({type: 'SET_USER_DATA',
        payload: {userId, email, login, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)
}


export const getAuthUserData = () => async (dispatch: any) => {
    let data = await authAPI.me()

    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string,
                      rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }

        dispatch(stopSubmit("login", {_error: data.messages[0]}))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    let data = await authAPI.logout()

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }

}

export default authReducer;




