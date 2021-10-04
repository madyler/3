import {FormAction} from 'redux-form'
import {BaseThunkType, InferActionsTypes} from './redux-store'
import {chatAPI, ChatMessageType} from '../../api/chat-api'
import {Dispatch} from 'redux'

let initialState = {
    messages: [] as ChatMessageType[]
}

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/CHAT/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state
    }
}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'SN/CHAT/MESSAGES_RECEIVED',
        payload: {messages}
    } as const)
}
let _newMessageHandlerCreator: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandlerCreator === null) {
        return _newMessageHandlerCreator = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandlerCreator
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}


export default chatReducer

type ThunkType = BaseThunkType<ActionsType | FormAction>
type ActionsType = InferActionsTypes<typeof actions>
export type InitialStateType = typeof initialState