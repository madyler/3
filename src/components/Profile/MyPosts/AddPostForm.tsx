import React from 'react';
import {maxLengthCreator} from '../../../utils/validators/validators';
import {createField, Textarea} from "../../commons/FormsControls/FormControl";
import {InjectedFormProps, reduxForm, reset} from "redux-form";

const maxLength20 = maxLengthCreator(20);

type PropsType = {}
export type AddPostFormValuesType = {
    newPostText: string
}
type AddPostFormValuesTypeKeys = Extract<keyof AddPostFormValuesType, string>

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>('Enter new post text', "newPostText",
                    [maxLength20], Textarea, {type: 'text'})}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

export const AddNewPostFormRedux = reduxForm<AddPostFormValuesType, {}>({
    form:"profileAddPostForm",
    onSubmitSuccess: (result, dispatch) => dispatch(reset("profileAddPostForm"))
})(AddPostForm)

export default AddPostForm;