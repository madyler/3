import React from "react";
import style from "./FormsControls.module.css"
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field} from "react-final-form";

export const FormsControls = ({meta:{touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={style.formsControlls + " " + (hasError ? style.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormsControls {...props}><textarea {...input} {...restProps}/></FormsControls>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormsControls {...props}><input {...input} {...restProps}/></FormsControls>
}

export const createField = (placeholder, type, name, component, validate, text='') => (
    <div>
        <Field placeholder={placeholder}
               type={type}
               name={name}
               component={component}
               validate={validate}
        />{text}
    </div>


)

