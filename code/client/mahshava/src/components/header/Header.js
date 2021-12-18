import React from 'react';
import './Header.css';
import Logout from '../auth/Logout';
import HeaderUser from "./HeaderUser";
import Calendar from "./Calendar";
import Mail from "./Mail";
import Notifications from "./Notifications";
import User from "./User";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">logo</div>
            <HeaderUser/>
            <Notifications/>
            <Mail/>
            <Calendar/>
            <img className={'line'} src={'./Line.svg'} alt={'Line'}/>
            <User/>
            <div className="logoutButton">
                <Logout />
            </div>
        </div>
    );
};

export default Header;
