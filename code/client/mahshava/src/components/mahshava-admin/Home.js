import React, {useEffect, useState} from 'react';
import AdminMainViewTable from '../table/AdminMainViewTable';
import StrengthSummary from './StrengthSummary';
import style from './Home.module.css';
import apiService from "../../services/api/api";

const Home = () => {
    const [schoolProcesses, setSchoolProcesses] = useState([])
    useEffect( async () => {
        const response = await apiService.processService.getSchoolProcess();
        setSchoolProcesses(response)
    }, []);


    return (
        <div className={style.homeContainer}>
            <div className={style.schoolsTableContainer}>
                <AdminMainViewTable schoolProcesses = {schoolProcesses}/>
            </div>
            <div className={style.strengthSummaryContainer}>
                <StrengthSummary schoolProcesses = {schoolProcesses}/>
            </div>
        </div>
    );
};

export default Home;

