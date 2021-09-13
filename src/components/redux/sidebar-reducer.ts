
let initialState: InitialSidebarStateType = {
    sidebar:[
        {id: 1, path: '/profile' , page: 'Profile' },
        {id: 2, path: '/dialogs' , page:'Message' },
        {id: 3, path: '/news' , page:'News' },
        {id: 4, path: '/music' , page:'Music' },
        {id: 5, path: '/users' , page:'Users' },
        {id: 6, path: '/settings' , page:'Settings'}
    ] as Array<SidebarType>
}

const sidebarReducer = (state = initialState) => {
    return state;
}
export default sidebarReducer

export type SidebarType = {
    id: number
    path: string
    page: string
}
export type InitialSidebarStateType = {
    sidebar: Array<SidebarType>
}


