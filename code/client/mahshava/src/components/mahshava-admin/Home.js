import React from 'react';
import AdminMainViewTable from '../table/AdminMainViewTable';
import StrengthSummary from './StrengthSummary';
import style from './Home.module.css';

const Home = () => {
    return (
        <div className={style.homeContainer}>
            <div className={style.schoolsTableContainer}>
                <AdminMainViewTable />
            </div>
            <div className={style.strengthSummaryContainer}>
                <StrengthSummary />
            </div>
        </div>
    );
};

export default Home;
