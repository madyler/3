import React from "react";
import {login} from "../redux/auth-reducer";
import {createField, Input} from "../commons/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import style from "../commons/FormsControls/FormsControls.module.css";

const maxLength20 = maxLengthCreator(20)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('login', 'text', 'email', Input,
                ([required, maxLength20]))}
            {createField('password', 'password', 'password', Input,
                ([required, maxLength20]))}
            {createField('', 'checkbox', 'rememberMe', Input,
                null, 'remember Me')}

            {error && <div className={style.Error}>
                {error}
            </div>
            }
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl &&  createField('Symbols from image', 'text', 'captcha', Input,
                ([required]))}

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;