import React from "react";
import {createField, Input} from "../../commons/FormsControls/FormsControls";
import {Form} from "react-final-form";
import {maxLengthCreator} from "../../../utils/validators/validators";
import style from "../../commons/FormsControls/FormsControls.module.css";


const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const ProfileDataForm = ({profile, onSubmit, error}) => (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <button type="submit">save</button>
                </div>
                <div>
                    <b>Name</b>: {createField("Full name",
                    "string",
                    "fullName",
                    Input,
                    [])}
                </div>
                {createField('', 'checkbox', 'lookingForAJob', Input,
                    null, '')}
                {createField('My professional skills', 'text', 'lookingForAJobDescription',
                    Input,
                    composeValidators(null, maxLengthCreator(20)))}
                {createField('About me', 'text', 'aboutMe',
                    Input,
                    composeValidators(null, maxLengthCreator(20)))}

                {error && <div className={style.Error}>
                    {error}
                </div>
                }






                {/*<div>*/}
                {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
                {/*        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
                {/*    }*/}
                {/*)}*/}
                {/*</div>*/}
            </form>

        )
        }
    />
)

export default ProfileDataForm