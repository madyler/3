import React from "react";
import s from "./Login.module.css";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = ({login, isAuth, error}) =>{
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth){
        return <Redirect to={"/profile"}/>
    }
    return<div className={s.login}>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} error={error}/>
    </div>
}
const mapStateToProps = (state) => ({
    error: state.auth.error,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);