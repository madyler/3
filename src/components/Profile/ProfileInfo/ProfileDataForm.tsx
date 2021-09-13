import React from "react";
import {createField, GetStringKeys, Input, Textarea} from "../../commons/FormsControls/FormControl";
import {maxLengthCreator} from "../../../utils/validators/validators";
import style from "../../commons/FormsControls/FormsControls.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../types/types";

const maxLength20 = maxLengthCreator(20)

type PropsType = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<PropsType & InjectedFormProps<ProfileType, PropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>save</button>
            </div>
            <div className={style.Error}>
                {props.error}
            </div>
            <div>
                <b>Name</b>: {createField<ProfileTypeKeys>("Full name",
                "fullName", [maxLength20], Input, {type: "text"})}
            </div>
            <div>
                <b>Looking for a job</b>: {createField<ProfileTypeKeys>('',
                'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills</b>: {createField<ProfileTypeKeys>(
                'My professional skills',
                'lookingForAJobDescription',
                [maxLengthCreator(50)], Textarea,
                {type: 'text'})}
            </div>
            <div>
                <b>About me</b>: {createField<ProfileTypeKeys>('About me', 'aboutMe',
                [maxLengthCreator(50)], Textarea, {type: 'text'})}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <div key={key}>
                    {/*todo: create some solution for embedded objects*/}
                    <b>{key}: {createField(key, "contacts." + key, [], Input, "string",)}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>(
    {
        form: 'edit-profile'
    }
)(ProfileDataForm)

export default ProfileDataReduxForm