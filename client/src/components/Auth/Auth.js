import {React, useState} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import './Auth.scss';


const Auth = (props) => {

    const [showLogin , setShowLogin] = useState(false);

    return (
        <div className="auth">
            <div className="form-container">
            { showLogin ? (
                <LoginForm></LoginForm>
            ) : (
                <RegisterForm setShowLogin={ setShowLogin }></RegisterForm>
            ) 
            }
            </div>

            <div className="change-form">
                <p>
                    { showLogin ? (
                        <>
                            Don’t have an account?
                            <span onClick={() => setShowLogin(!showLogin)} >Sign up!</span>
                        </>

                    ) : (
                        <>
                            Already have an account?
                            <span onClick={() => setShowLogin(!showLogin)} >Log in!</span>
                        </>
                    ) }
                </p>
            </div>
        </div>
    )
}

export default Auth;
