import React from 'react';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from "../../commons/FormsControls/FormControl";
import {Field, reduxForm} from "redux-form";

const maxLength20 = maxLengthCreator(20);

const AddNewPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea} name="addNewPost"
                       validate={[maxLength20]}
                       placeholder="Enter new post text"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

export const AddNewPostFormRedux = reduxForm({form:"profileAddPostForm"})(AddNewPostForm)

export default AddNewPostForm;