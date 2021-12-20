import React from 'react';
import style from './NavigationSidebar.module.css';
import PlaceHolderLogo from "./placeHolderLogo";


const NavigationSidebar = () => {
    return(
  <div className={style.sidebarContainer}>
    <div className={style.logo}>
        <PlaceHolderLogo/>
    </div>
      <div className={style.logo}>
          <PlaceHolderLogo/>
      </div>
      <div className={style.logo}>
          <PlaceHolderLogo/>
      </div>
      <div className={style.logo}>
          <PlaceHolderLogo/>
      </div>
      <div className={style.bottomLogo}>
          <PlaceHolderLogo/>
      </div>
  </div>
    );

};

export default NavigationSidebar;
