import {getAuthUserData} from "./auth-reducer";

const INITIAL_SUCCESS = 'App/INITIAL_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case INITIAL_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}
type initializedSuccessActionType = {
    type: typeof INITIAL_SUCCESS
}

export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIAL_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;




