import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
            sidebar: state.sidebar
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar) as React.ComponentType

export default NavbarContainer;