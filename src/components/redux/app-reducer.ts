import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";

export type InitialStateType = typeof initialState

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIAL_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const actions = {initializedSuccess: () => ({type: 'SN/APP/INITIAL_SUCCESS'} as const)}

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer;


type ActionTypes = InferActionsTypes<typeof actions>


