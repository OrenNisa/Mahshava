import React from 'react';
import './Header.css';
import Logout from '../auth/Logout';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">logo</div>
            <div className="logoutButton">
                <Logout />
            </div>
        </div>
    );
};

export default Header;
