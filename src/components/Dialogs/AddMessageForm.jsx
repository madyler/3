import React from "react";
import {Textarea} from "../commons/FormsControls/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";

const maxlength22 = maxLengthCreator(22)

const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field component={Textarea} name="addNewMessage"
                               validate={[required, maxlength22]}
                               placeholder="Enter new message"/>
                    </div>
                    <div>
                        <button>Add message</button>
                    </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default AddMessageForm;