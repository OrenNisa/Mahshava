import React from 'react';
import style from './HeaderAutoLayout.module.css';
import Layout from './Layout';
import NameAllSchools from './NameAllSchools';
import SearchLine from './SearchLine';
import Filtering from "./Filtering";
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
                <div className={style.FilteringLog}>
                    <Filtering />
                </div>
                <div className={style.Search}>
                    <SearchLine />
                </div>
            </div>
    );
};

export default HeaderAutoLayout;
