import {React, useState} from 'react';
// Components
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
// Style
import './Auth.scss';


const Auth = (props) => {

    const [showLogin , setShowLogin] = useState(true);

    return (
        <div className="auth">
            <div className="form-container">
            { showLogin ? (
                <LoginForm closeModal={props.closeModal}></LoginForm>
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
