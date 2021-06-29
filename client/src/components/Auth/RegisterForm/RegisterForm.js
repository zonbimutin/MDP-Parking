import React from 'react';
// GraphQL 
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../gql/user";
// Form validation
import { useFormik } from "formik";
import * as Yup from "yup";
// UI Components
import { Form, Button } from "semantic-ui-react";
// Toast
import { toast } from "react-toastify";

function initialValues() {
		return {
			firstname: "",
			lastname: "",
			username: "",
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
						.required("Prénom obligatoire")
						.max(20, "20 characters limite"),
				lastname: Yup.string()
						.required("Nom de famille obligatoire")
						.max(20, "20 characters limite"),
					
				username: Yup.string()
						.matches(
							/^[a-zA-Z0-9-]*$/,
							"Le nom d'utilisateur ne peut pas avoir d'espace"
						)
						.required("Nom d'utilisateur est nécessaire"),
				email: Yup.string()
						.email("L'email n'est pas valide")
						.required("L'e-mail est requis"),
				password: Yup.string()
						.required("Le mot de passe est obligatoire")
						.oneOf([Yup.ref("repeatPassword")], "les mots de passe ne sont pas les mêmes"),
				repeatPassword: Yup.string()
						.required("Le mot de passe est obligatoire")
						.oneOf([Yup.ref("password")], "les mots de passe ne sont pas les mêmes"),
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
			<div className="form-title">S'enregistrer!</div>
			<Form className="register-form parki form-group" onSubmit={formik.handleSubmit}>
				<Form.Input
					type="text"
					placeholder="Prénom"
					name="firstname"
					value={formik.values.firstname}
					onChange={formik.handleChange}
					error={formik.errors.firstname && true}
				/>
				<Form.Input
					type="text"
					placeholder="Nom"
					name="lastname"
					value={formik.values.lastname}
					onChange={formik.handleChange}
					error={formik.errors.lastname && true}
				/>
				<Form.Input
					type="text"
					placeholder="Username"
					name="username"
					value={formik.values.username}
					onChange={formik.handleChange}
					error={formik.errors.username && true}
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
				<Button type="submit" className="parki btn btn-gradient-primary btn-lg">S'enregistrer!</Button>
			</Form>
		</>
	)
}

export default RegisterForm;
