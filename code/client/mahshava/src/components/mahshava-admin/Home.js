import React, {useState} from 'react';
import AdminMainViewTable from '../table/AdminMainViewTable';
import StrengthSummary from './StrengthSummary';
import style from './Home.module.css';
import HeaderAutoLayout from "./AutoLayout/HeaderAutoLayout";
import {useSchoolProcesses} from "../../SchoolsContext";

const Home = () => {
    const [schoolProcesses, setSchoolProcesses] = useState([])
    const FetchData = async () => {
        const process = await useSchoolProcesses().schoolProcesses
        setSchoolProcesses(process);
    }
    FetchData().catch(console.error)


    return (
        <div className={style.homeContainer}>
            <div className={style.LayoutContainer}>
                <HeaderAutoLayout/>
            </div>
            <div className={style.schoolsTableContainer}>
                <AdminMainViewTable schoolProcesses={schoolProcesses}/>
            </div>
            <div className={style.strengthSummaryContainer}>
                <StrengthSummary schoolProcesses={schoolProcesses}/>
            </div>
        </div>
    );
};

export default Home;

