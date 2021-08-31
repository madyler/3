
let initialState: InitialStateType = {
    sidebar:[
        {path: '/profile' , page: 'Profile' },
        {path: '/dialogs' , page:'Message' },
        {path: '/news' , page:'News' },
        {path: '/music' , page:'Music' },
        {path: '/users' , page:'Users' },
        {path: '/settings' , page:'Settings'}
    ]
}

const sidebarReducer = (state = initialState) => {
    return state;
}
export default sidebarReducer

type SidebarType = {
    path: string
    page: string
}
type InitialStateType = {
    sidebar: Array<SidebarType>
}


