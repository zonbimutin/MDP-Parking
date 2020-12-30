import React from 'react';
// GraphQL 
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../gql/user";
// Form validation
import { useFormik } from "formik";
import * as Yup from "yup";
// UI Components
import { Form, Button } from "semantic-ui-react";
import { toast } from "react-toastify";

function initialValues() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  }

const RegisterForm = (props) => {

    const [register] = useMutation(REGISTER);
    const { setShowLogin } = props;

    // Hook Formik
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            firstname: Yup.string()
                .required("First Name required")
                .max(20, "20 characters limite"),
            lastname: Yup.string()
                .required("Last Name required")
                .max(20, "20 characters limite"),
            email: Yup.string()
                .email("El email no es valido")
                .required("El email es obligatorio"),
            password: Yup.string()
                .required("La contraseña es obligatoria")
                .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son iguales"),
            repeatPassword: Yup.string()
                .required("La contraseña es obligatoria")
                .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
          }),
        onSubmit: async (formData) => {
            try {

                const newUser = formData;
                delete newUser.repeatPassword;

                await register({
                    variables: {
                      input: newUser,
                    },
                });

                toast.success("Usuario registrado correctamente");
                setShowLogin(true);
                
            } catch (error) {
                toast.error(error.message);
                console.log(error);
            }
        },

    });

    return (
        <>
        <h2 className="register-form-title">
          Regístrate para ver fotos y vídeos de tus amigos.
        </h2>
        <Form className="register-form" onSubmit={formik.handleSubmit}>
          <Form.Input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.errors.firstname && true}
          />
          <Form.Input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.errors.lastname && true}
          />
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
          <Form.Input
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            error={formik.errors.repeatPassword && true}
          />
          <Button type="submit" className="btn-submit">
            Registrarse
          </Button>
        </Form>
      </>
    )
}

export default RegisterForm;
