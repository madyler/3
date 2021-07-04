import React from "react";
import {Field, Form} from "react-final-form";
import {Textarea} from "../commons/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const AddMessageForm = props => {
    return (
        <Form onSubmit={(value) => {
            console.log(value);
            props.addMessage(value.addNewMessage)
        }}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field component={Textarea} name="addNewMessage"
                               validate={composeValidators(required, maxLengthCreator(50))}
                               placeholder="Enter new message"/>
                    </div>
                    <div>
                        <button>Add message</button>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default AddMessageForm;