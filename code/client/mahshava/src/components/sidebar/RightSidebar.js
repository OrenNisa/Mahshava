import React from 'react';
import style from './RightSidebar.module.css';
import HistorySchoolLogo from "./placeHolderLogo";


const RightSidebar = () => {
    return(
  <div className={style.sidebarContainer}>
    <div className={style.logo}>
        <HistorySchoolLogo/>
    </div>
      <div className={style.logo}>
          <HistorySchoolLogo/>
      </div>
      <div className={style.logo}>
          <HistorySchoolLogo/>
      </div>
      <div className={style.logo}>
          <HistorySchoolLogo/>
      </div>
      <div className={style.logoforend}>
          <HistorySchoolLogo/>
      </div>
  </div>
    );

};

export default RightSidebar;
