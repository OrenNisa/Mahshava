import React, {useEffect, useState} from 'react';
import AdminMainViewTable from '../table/AdminMainViewTable';
import StrengthSummary from './StrengthSummary';
import style from './Home.module.css';
import apiService from "../../services/api/api";
import HeaderAutoLayout from "./AutoLayout/HeaderAutoLayout";

const Home = () => {
    const [schoolProcesses, setSchoolProcesses] = useState([])
    useEffect( async () => {
        const response = await apiService.processService.getSchoolProcess();
        setSchoolProcesses(response)
    }, []);


    return (
        <div className={style.homeContainer}>
            <div className={style.LayoutContainer}>
                <HeaderAutoLayout />
            </div>
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

