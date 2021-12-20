import React from 'react';
import './Header.css';
import Logout from '../auth/Logout';
import CalendarIcon from "./icons/CalendarIcon";
import NotificationsIcon from "./icons/NotificationsIcon";
import MailIcon from "./icons/MailIcon";
import UserIcon from "./icons/UserIcon";
const Header = () => {
    return (
        <div className="header-container">
            <div className="NotificationsIcon"><NotificationsIcon/></div>
            <div className="MailIcon"><MailIcon/></div>
            <div className="CalendarIcon"><CalendarIcon/></div>
            <div className="UserIcon"><UserIcon/></div>
            <div className="userGreeting">hello guest</div>
            <div className="logoutButton">
                <Logout />
            </div>
        </div>
    );
};

export default Header;
