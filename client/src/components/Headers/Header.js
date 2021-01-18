import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Header = () => {
    return (
        <div>
            <Menu>
                <Menu.Item><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item><Link to='/search'>Search</Link></Menu.Item>
                <Menu.Item><Link to='/resume'>Resume</Link></Menu.Item>
            </Menu>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/search'>Search</Link>
                <Link to='/resume'>Resume</Link>
            </nav>
        </div>
    )
}

export default Header
