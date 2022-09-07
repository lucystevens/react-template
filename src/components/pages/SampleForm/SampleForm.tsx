import React from 'react'
import { Typography, TextField, Button } from '@mui/material';
import { FormikErrors, FormikHelpers, useFormik } from 'formik';
import { LoginDto } from 'models/LoginDto';
import { formikProps } from 'utils/FormikHelpers';
import { AlignedContent } from 'components/common';
import './SampleForm.scss';

interface SampleFormProps {

}

export const SampleForm: React.FC<SampleFormProps> = ({  }) => {

    const initialValues: LoginDto = {
        username: "",
        password: ""
    }

    // TODO use yup
    const validate = (values: LoginDto): FormikErrors<LoginDto> => {
        let errors: FormikErrors<LoginDto> = {}
        if(values.password.length < 12){
            errors.password = "Password must be at least 12 characters long."
        }

        if(values.password.length > 64){
            errors.password = "Password can be no longer than 64 characters"
        }

        if(values.username === ""){
            errors.username = "Username is required"
        }

        return errors
    }

    const submit = (values: LoginDto, formik: FormikHelpers<LoginDto>) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues: initialValues,
        validate: validate,
        onSubmit: submit,
    });

    return (
        <div className="SampleForm">
            <AlignedContent fullSize={true}>
                <Typography variant={"h2"}>Login</Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        {...formikProps.textField(formik, "username")}/>

                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        {...formikProps.textField(formik, "password")}/>

                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </form>
            </AlignedContent>
        </div>
    );

};
