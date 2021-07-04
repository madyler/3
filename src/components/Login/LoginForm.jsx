import React from "react";
import {Form, Field} from 'react-final-form'
import {maxLengthCreator, required} from './../../utils/validators/validators'
import {createField, Input} from "../commons/FormsControls/FormsControls";
import style from "./../commons/FormsControls/FormsControls.module.css"


//export function onSubmit(formData) {
  // console.log(formData)
    //this.props.login(formData.email, formData.password, formData.rememberMe)
//}

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const LoginForm = ({onSubmit, error}) => (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} >
                {createField('login','text' ,'email',Input,
                    composeValidators(required, maxLengthCreator(20)))}
                {createField('password','password','password',Input,
                    composeValidators(required, maxLengthCreator(20)))}

                {error && <div className={style.Error}>
                        {error}
                    </div>
                }
                {createField('','checkbox','rememberMe',Input,
                    null,'remember Me')}
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        )
        }
    />
)

export default LoginForm;