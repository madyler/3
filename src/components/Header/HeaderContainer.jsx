import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout, actions} from "../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
const setAuthUserData = actions.setAuthUserData
export default connect(mapStateToProps, {setAuthUserData, logout})(HeaderContainer);