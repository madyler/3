import React from 'react';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from "../../commons/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";

const maxLength20 = maxLengthCreator(20)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="addNewPost"
                       validate={[required, maxLength20]}
                       placeholder="Enter new post text"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddNewPostFormRedux = reduxForm({form:"profileAddPostForm"})(AddNewPostForm)

export default AddNewPostForm;