import React from 'react';
import './Header.module.css';
import Logout from '../auth/Logout';
import HeaderUser from "./HeaderUser";
import CalendarIcon from "./icons/CalendarIcon";
import MailIcon from "./icons/MailIcon";
import NotificationsIcon from "./icons/NotificationsIcon";
import UserIcon from "./icons/UserIcon";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">logo</div>
            <HeaderUser/>
            <NotificationsIcon/>
            <MailIcon/>
            <CalendarIcon/>
            <svg className={'line'} width="2" height="49" viewBox="0 0 2 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.951172" y1="49" x2="0.951174" y2="-2.18557e-08" stroke="#2F3A5F"/>
            </svg>
            <UserIcon/>
            <div className="logoutButton">
                <Logout />
            </div>
        </div>
    );
};

export default Header;
