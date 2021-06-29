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
                            Vous n'avez pas de compte ?
                            <span onClick={() => setShowLogin(!showLogin)} >S'enregistrer!</span>
                        </>

                    ) : (
                        <>
                            Vous avez déjà un compte?
                            <span onClick={() => setShowLogin(!showLogin)} >Se connecter!</span>
                        </>
                    ) }
                </p>
            </div>
        </div>
    )
}

export default Auth;
