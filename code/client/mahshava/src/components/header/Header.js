import React from 'react';
import style from './Header.module.css';
import Logout from '../auth/Logout';
import CalendarIcon from './icons/CalendarIcon';
import NotificationsIcon from './icons/NotificationsIcon';
import MailIcon from './icons/MailIcon';
import UserIcon from './icons/UserIcon';
import HeaderUser from './HeaderUser';
const Header = () => {
    return (
        <div className={style.headerContainer}>
            <div className={style.NotificationsIcon}>
                <NotificationsIcon />
            </div>
            <div className={style.MailIcon}>
                <MailIcon />
            </div>
            <div className={style.CalendarIcon}>
                <CalendarIcon />
            </div>
            <div className={style.UserIcon}>
                <UserIcon />
            </div>
            <div className={style.userGreeting}>
                <HeaderUser />
            </div>
            <div className={style.logoutButton}>
                <Logout />
            </div>
        </div>
    );
};

export default Header;
