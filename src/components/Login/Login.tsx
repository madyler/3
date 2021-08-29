import React from "react";
import s from "./Login.module.css";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, Input} from "../commons/FormsControls/FormControl";
import style from "../commons/FormsControls/FormsControls.module.css";
import {InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import {AppStateType} from "../redux/redux-store";

const maxLength20 = maxLengthCreator(20)

type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<LoginFormOwnPropsType & InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('login', "email",
                [required, maxLength20], Input, {type: 'text'})}
            {createField<LoginFormValuesTypeKeys>('password', 'password',
                [required, maxLength20], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input,
                {type: 'checkbox'}, 'remember Me')}

            {props.error && <div className={style.Error}>
                {props.error}
            </div>
            }
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image',
                'captcha', [required], Input, {}, 'captcha'
            )}

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)

type MapStateToPropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={s.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);