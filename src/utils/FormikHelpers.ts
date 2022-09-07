import { FormikErrors, FormikState, FormikTouched } from 'formik';
import { TextFieldProps } from '@mui/material';

type Formik<T> = {
    handleBlur: {
        (e: React.FocusEvent<any>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    };
    handleReset: (e: any) => void;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    resetForm: (nextState?: Partial<FormikState<T>> | undefined) => void;
    setErrors: (errors: FormikErrors<T>) => void;
    setFormikState: (stateOrCb: FormikState<T> | ((state: FormikState<T>) => FormikState<T>)) => void;
    setFieldTouched: (field: string, touched?: boolean, shouldValidate?: boolean | undefined) => Promise<FormikErrors<T>> | Promise<void>;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<FormikErrors<T>> | Promise<void>;
    setFieldError: (field: string, value: string | undefined) => void;
    setStatus: (status: any) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    setTouched: (touched: FormikTouched<T>, shouldValidate?: boolean | undefined) => Promise<FormikErrors<T>> | Promise<void>;
    setValues: (values: React.SetStateAction<T>, shouldValidate?: boolean | undefined) => Promise<FormikErrors<T>> | Promise<void>;
    submitForm: () => Promise<any>;
    validateField: (name: string) => Promise<void> | Promise<string | undefined>;
    isValid: boolean;
    dirty: boolean;
    validateOnBlur: boolean;
    validateOnChange: boolean;
    validateOnMount: boolean;
    values: T;
    errors: FormikErrors<T>;
    touched: FormikTouched<T>;
    isSubmitting: boolean;
    isValidating: boolean;
    status?: any;
    submitCount: number;
}

export const formikProps = {

    textField: <T>(formik: Formik<T>, field: keyof T): TextFieldProps => {
        return {
            id: field.toString(),
            name: field.toString(),
            value: formik.values[field],
            onChange: formik.handleChange,
            error: formik.touched[field] && Boolean(formik.errors[field]),
            helperText: formik.touched[field] && formik.errors[field]
        }
    }
}