import React, { useState } from 'react'
// GraphQL
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../gql/user";
// Token manage
import { setToken } from "../../../utils/token";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Form Validation
import { useFormik } from "formik";
import * as Yup from "yup";
// UI Components
import { Form, Button } from "semantic-ui-react";
// Toast 
import { toast } from "react-toastify";


function initialValues() {
    return {
        email: "",
        password: "",
    };
}

const LoginForm = (props) => {

    // Hook Form error state
    const [error, setError] = useState('');
    
    // GraphQL mutation
    const [login] = useMutation(LOGIN);
    
    // Hook useAuth
    const { auth, setUser } = useAuth();
    
    // Hook Formik
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            email: Yup.string()
                .email("El email no es valido")
                .required("El email es obligatorio"),
            password: Yup.string()
                .required("El password es obligatorio"),
        }),
        onSubmit: async (formData) => {
            
            setError('');

            try {
                const logUser = formData;
                const { data } = await login({
                    variables: {
                        input: logUser
                    }
                });

                // Get Token
                const { token } = data.login;
                // Save Token in localStorage
                setToken(token);
                // Set User in AuthContext
                setUser(token);
                // Toast Success message
                toast.success('User Loged');
                //Close modal if existe
                if(props.closeModal) {
                    props.closeModal(false);
                }

            } catch (error) {
                setError(error.message);
                console.log(error);
            }
        },
    });

    console.log(auth);

    return (
        <>
            <h2 className="login-form-title">
            Log in!
            </h2>
            <Form className="login-form" onSubmit={formik.handleSubmit}>
                <Form.Input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email && true}
                />
                <Form.Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password && true}
                />

                <Button type="submit" className="btn-submit">
                    Log in!
                </Button>
                {error && <p className="submit-error">{error}</p>}
            </Form>
        </>     
    )
}

export default LoginForm;
