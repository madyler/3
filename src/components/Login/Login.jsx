import React from "react";
import s from "./Login.module.css";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";


const Login = ({login, isAuth, captchaUrl}) => {
   const onSubmit = (formData) => {
       login(formData.email, formData.password, formData.rememberMe, formData.captcha)
   }
    if (isAuth) {
       return <Redirect to={"/profile"}/>
     }
    return <div className={s.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);