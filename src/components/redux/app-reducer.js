import {getAuthUserData} from "./auth-reducer";

const INITIAL_SUCCESS = 'INITIAL_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
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


export const initializedSuccess = () => ({type: INITIAL_SUCCESS});

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;




