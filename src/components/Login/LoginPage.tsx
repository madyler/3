import React from 'react'
import s from './Login.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import {maxLengthCreator, required} from '../../utils/validators/validators'
import {createField, Input} from '../commons/FormsControls/FormControl'
import style from '../commons/FormsControls/FormsControls.module.css'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {AppStateType} from '../redux/redux-store'


type LoginFormOwnPropsType = {
    captchaUrl: string | null
}
type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const maxLength20 = maxLengthCreator(20)

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
            {props.captchaUrl && <img src={props.captchaUrl} alt={''}/>}
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

export const LoginPage: React.FC = () => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={s.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}