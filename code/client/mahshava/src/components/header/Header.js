import React from 'react';
import './Header.css';
import Logout from '../auth/Logout';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo1">logo1</div>
            <div className="logo2">logo2</div>
            <div className="logo3">logo3</div>
            <div className="logo4">logo4</div>
            <div className="userGreeting">hello guest</div>
            <div className="logoutButton">
                <Logout />
            </div>
        </div>
    );
};

export default Header;
