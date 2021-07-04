import React from 'react';
import s from './Navbar.module.css';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
            sidebar: state.sidebar
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;