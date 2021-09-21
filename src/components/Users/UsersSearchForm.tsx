import {Field, Form, Formik} from 'formik'
import React from 'react'
import {FilterType} from '../redux/users-reducer'


const usersSearchFormValidate = (value: any) => {
    const errors = {}
    return errors
}
type  FormType = {
    term: string
    friend: 'null' | 'true' | 'false'
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{term: '', friend: 'null'}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}: { isSubmitting: any }) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" type={'checkbox'} as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})