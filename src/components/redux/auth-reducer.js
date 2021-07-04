import {authAPI} from "../../api/api";

const SET_USER_DATA = 'samuraj-network/auth/SET_USER_DATA';
const LOGIN_ERROR = 'samuraj-network/auth/LOGIN_ERROR';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    error: "",
    authPhoto: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                error: null
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state, error: action.error
            }
        }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
);
export const loginError = (error) => ({type: LOGIN_ERROR, error});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        dispatch(loginError(response.data.messages[0]))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export default authReducer;




