const ADD_MESSAGE = 'ADD_MESSAGE';

type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    text: string | null
}
export let addMessageActionCreator = (value: string): AddMessageActionCreatorType => ({type: ADD_MESSAGE, text: value})

type DialogType = {
    id: number
    name: string
    ava: string
}
type MessageType = {
    id: number
    message: string
}
export type InitialStateType = typeof initialState

let initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'What are you doing tonight?'},
        {id: 4, message: 'Not decided yet'},
        {id: 5, message: 'How about clubbing?'},
        {id: 6, message: 'Ye.. Sure!'},
        {id: 7, message: 'See you soon'},
        {id: 8, message: 'Bye'}
    ] as Array<MessageType>,
    dialogs: [
        {
            id: 1,
            name: 'Alex',
            ava: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwiNUolGE_ybMJdnOfdtkwG0knyyporBK6A&usqp=CAU`
        },
        {
            id: 2,
            name: 'Sveta',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7E51tmHxujSQLzkC3ZZ_OmoqynSghQPmbYA&usqp=CAU'
        },
        {
            id: 3,
            name: 'Artur',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshW2NpetcJKgpq6jaRpnFR2uxuGAXWEN8KQ&usqp=CAU'
        },
        {
            id: 4,
            name: 'Lera',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kEMUrjjp-dl3Y1q5b-lNC_m10w_ta96cJA&usqp=CAU'
        },
        {
            id: 5,
            name: 'Mikola',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9_BYmlCyl0Ea9J8KoLOcmoPpZQ-tWpTW5w&usqp=CAU'
        },
        {
            id: 6,
            name: 'Marina',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8e9_pBuEdTiKdBm0Gw3eWWCBb1CxIAbI8AQ&usqp=CAU'
        }
    ] as Array<DialogType>
}

const dialogsReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, {id: 9, message: action.text}]}
        default:
            return state;
    }
}
export default dialogsReducer;




