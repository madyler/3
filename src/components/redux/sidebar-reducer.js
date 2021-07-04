
let initialState = {
    sidebar:[
        {path: '/profile' , page: 'Profile' },
        {path: '/dialogs' , page:'Message' },
        {path: '/news' , page:'News' },
        {path: '/music' , page:'Music' },
        {path: '/users' , page:'Users' },
        {path: '/settings' , page:'Settings'}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer;




