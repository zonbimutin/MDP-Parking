import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//useAuth
import useAuth from '../../hooks/useAuth';
// semantic ui
import { Container, Image, Button } from 'semantic-ui-react';
// Scss Style
import './Header.scss';
// Components
import UserMenu from './UserMenu';
//Logo
import Logo from '../../assets/images/logo-parki.png';

const Header = () => {

    const { auth } = useAuth();

    const [logo, setLogo] = useState('')

    useEffect(() => {
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    
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
                    <Link className='ui button' to='/'>Louer ma place !</Link>
                    {auth && (
                        <>
                            <Link className='ui button' to='/history'>Historique</Link>
                            <Link className='ui button' to='/favorites'>Favoris</Link>
                            <Link className='ui button' to='/messages'>Messagerie</Link>
                        </>
                    )}
                    <UserMenu/>
                </div>
            </div>
        </div>
    )
}

export default Header;
