import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// User HOOK
import useAuth from '../../../hooks/useAuth';

//Components
import { Dropdown, Image, Icon } from 'semantic-ui-react';
import AuthModal from '../../modals/AuthModal';
// Style
import './UserMenu.scss';


const Trigger = (props) => {

    return (
        <div className='dropdown__trigger'>
            <span>
                <Icon name='bars' /> 
            </span>
    
            <span>
                <Image avatar src='https://via.placeholder.com/150' /> 
            </span>
        </div>
    )
}
  

const UserMenu = () => {

    // Auth Hook
    const { auth, logout } = useAuth();

    console.log(auth);


    return (
        <div className='userMenu'>
            
            <Dropdown
            trigger={ <Trigger/> }
            direction='left'
            icon={ null }
            floating
            //labeled
            button
            className='userMenu__dropdown'
            >
                <Dropdown.Menu className="parki ui card userMenu__menu">

                    <Dropdown.Item>
                        { auth ? (
                            <>
                                <Link to={`/Profile/${auth.id}`}>Profile</Link>
                                <a onClick={() => logout()}>Logout</a>
                            </>

                        ) : (
                            <AuthModal trigger={<a>Login</a>} />
                        )}
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <Link to='/reusme'>Resume</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default UserMenu;
