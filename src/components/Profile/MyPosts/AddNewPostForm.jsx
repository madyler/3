import React from 'react';
import {Field, Form} from "react-final-form";
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import {Textarea} from "../../commons/FormsControls/FormsControls";


const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const AddNewPostForm = (props) => {
    return (
            <Form onSubmit={(value) => {
                props.addPost(value.addNewPost)
            }}>
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field component={Textarea} name="addNewPost"
                                   validate={composeValidators(required, maxLengthCreator(20))}
                                    placeholder="Enter new post text"/>
                        </div>
                        <div>
                            <button>Add post</button>
                        </div>
                    </form>
                )}
            </Form>
    )
}

export default AddNewPostForm;