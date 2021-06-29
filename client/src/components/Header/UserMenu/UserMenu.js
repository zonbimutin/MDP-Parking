import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// User HOOK
import useAuth from '../../../hooks/useAuth';

//Components
import { Dropdown, Image, Icon } from 'semantic-ui-react';
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
    // history
    const history = useHistory();

    const handleLogout = () => {
        logout()
        history.push('/')
    }

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

                    {auth && 
                        <>
                            <Dropdown.Item>
                                <Link to={`/Profile/${auth.id}`}>Profile</Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                <div onClick={() => handleLogout()}>Logout</div>
                            </Dropdown.Item>
                        </>
                                
                    }

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default UserMenu;
