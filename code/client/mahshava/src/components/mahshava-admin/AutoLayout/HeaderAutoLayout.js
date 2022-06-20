import React from 'react';
import style from './HeaderAutoLayout.module.css';
import Layout from './Layout';
import NameAllSchools from './NameAllSchools';
import MainName from "./MainName";


const HeaderAutoLayout = () => {
    return (
            <div className={style.Layout}>
                <div className={style.Layout1}>
                    <Layout />
                </div>
                <div className={style.Main}>
                    <MainName />
                </div>
                <div className={style.StrSchool}>
                    <NameAllSchools />
                </div>
            </div>
    );
};

export default HeaderAutoLayout;
