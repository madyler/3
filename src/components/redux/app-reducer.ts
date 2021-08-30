import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";

export type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case 'INITIAL_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {initializedSuccess: () => ({type: 'INITIAL_SUCCESS'} as const)}

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer;




