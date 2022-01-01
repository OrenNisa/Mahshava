import React from 'react';
import style from './NavigationSidebar.module.css';
import AddSchoolLogo from "./logo/AddSchoolLogo";
import DataBaseLogo from "./logo/DataBaseLogo";
import HistorySchoolLogo from "./logo/HistorySchoolLogo";
import MainPageLogo from "./logo/MainPageLogo";
import HelpLogo from "./logo/HelpLogo";
const NavigationSidebar = () => {
    return (
        <div className={style.sidebarContainer}>
            <div className={style.logo}>
                <MainPageLogo/>
            </div>
            <div className={style.logo}>
                <AddSchoolLogo/>
            </div>
            <div className={style.logo}>
                <HistorySchoolLogo/>
            </div>
            <div className={style.logo}>
                <DataBaseLogo/>
            </div>
            <div className={style.bottomLogo}>
                <HelpLogo/>
            </div>
        </div>
    );

};

export default NavigationSidebar;
