import React from "react";
import {createField, Textarea} from "../commons/FormsControls/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {InjectedFormProps, reduxForm, reset} from "redux-form";
import {NewMessageFormValuesType} from "./Dialogs";


type AddMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type  PropsType = {}

const maxlength22 = maxLengthCreator(22)

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddMessageFormValuesKeysType>('Enter new message', "newMessageBody",
                    [required, maxlength22], Textarea)}
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType, PropsType>({form: "dialogAddMessageForm",
    onSubmitSuccess: (result, dispatch) => dispatch(reset("dialogAddMessageForm"))})(AddMessageForm)
