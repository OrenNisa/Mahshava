import React from 'react';
import style from './Header.module.css';
import CalendarIcon from "./icons/CalendarIcon";
import NotificationsIcon from "./icons/NotificationsIcon";
import MailIcon from "./icons/MailIcon";
import UserIcon from "./icons/UserIcon";
import LineIcon from "./icons/LineIcon"

const Header = () => {
    return (
        <div className={style.headerContainer}>
            <div className={style.NotificationsIcon}><NotificationsIcon/></div>
            <div className={style.MailIcon}><MailIcon/></div>
            <div className={style.CalendarIcon}><CalendarIcon/></div>
            <div className={style.LineIcon}><LineIcon/></div>
            <div className={style.UserIcon}><UserIcon/></div>
            <div className={style.userGreeting}>hello guest</div>
        </div>
    );
};

export default Header;
