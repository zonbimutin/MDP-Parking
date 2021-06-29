import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//useAuth
import useAuth from '../../hooks/useAuth';
// semantic ui
import {Image} from 'semantic-ui-react';
// Scss Style
import './Header.scss';
// Components
import UserMenu from './UserMenu';
import AuthModal from '../modals/AuthModal';
import ParkiRegisterModal from '../modals/ParkiRegisterModal/ParkiRegisterModal';
//Logo
import Logo from '../../assets/images/logo-parki.png';

const Header = () => {

    const { auth } = useAuth();

    const [logo, setLogo] = useState('')

    useEffect(() => {
    
        window.addEventListener('scroll', function() {
            var value = window.scrollY;

            if (value > 80) {
                document.querySelector('.header--fixed').classList.add('header--sticky');
            }else{
                document.querySelector('.header--fixed').classList.remove('header--sticky');
        
            }
        })
    
        return () => {
            window.removeEventListener("load", function(){
                console.log('Event load removed');
            })
            window.removeEventListener("scroll", function(){
                console.log('Event scroll removed');
            })
        }
    
      });

    useEffect(() => {
        fetch('/assets/images/parki/logo.svg')
            .then(data => setLogo(data.url))
      
    }, [])



    return (
        <div className="header header--fixed">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">
                        <Image src={logo ? logo : Logo} alt="Parki" />
                    </Link>
                </div>
                <div className="header__right">

                    {auth ? (
                        <>
                            {auth.host ? (
                                <>
                                    <ParkiRegisterModal trigger={<button className="ui button parki btn-hover-gradient-primary">Louer ma place</button>} />
                                    <Link className='ui button parki btn-hover-gradient-primary' to='/host/parkis'>Mes Parkis</Link>
                                </>
                            ) : (
                                <>
                                    <Link className='ui button parki btn-hover-gradient-primary' to='/host/register'>Devenir annonceur</Link>
                                </>
                            )}
                            <Link className='ui button parki btn-hover-gradient-primary' to='/bookings'>Historique</Link>
                            <Link className='ui button parki btn-hover-gradient-primary' to='/favorites'>Favoris</Link>
                            <Link className='ui button parki btn-hover-gradient-primary' to='/messages'>Messagerie</Link>
                            <UserMenu/>
                        </>
                    ): (
                        <>
                            <AuthModal trigger={<button className="ui button parki btn-hover-gradient-primary">Se connecter</button>} />

                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
