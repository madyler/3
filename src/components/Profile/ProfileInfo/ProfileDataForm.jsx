import React from "react";
import {createField, Input, Textarea} from "../../commons/FormsControls/FormControl";
import {maxLengthCreator} from "../../../utils/validators/validators";
import style from "../../commons/FormsControls/FormsControls.module.css";
import {reduxForm} from "redux-form";

const maxLength20 = maxLengthCreator(20)


const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>save</button>
            </div>
            <div className={style.Error}>
                {props.error}
            </div>
            <div>
                <b>Name</b>: {createField("Full name",
                "fullName", [maxLength20], Input,{type: "text"})}
            </div>
            <div>
                <b>Looking for a job</b>: {createField('',
                'lookingForAJob',[], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills</b>: {createField(
                'My professional skills',
                'lookingForAJobDescription',
                [maxLengthCreator(50)], Textarea,
                {type: 'text'})}
            </div>
            <div>
                <b>About me</b>: {createField('About me', 'aboutMe',
                 [maxLengthCreator(50)], Textarea,{type: 'text'})}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key,"contacts." + key,[], Input,"string",)}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm(
    {
        form: 'edit-profile'
    }
)(ProfileDataForm)

export default ProfileDataReduxForm