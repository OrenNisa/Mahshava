import React from 'react';
import style from './PreliminaryReport.module.css';
import HeaderProcess from "./Process/HeaderProcess";
import OutputAutoLayout from "./AutoLayout/OutputAutoLayout";
import SchoolDetails from "./SchoolDetails"
import Question from "./AutoLayout/Question";
import FullInitialReport from "./FullInitialReport";
import Accordion from "./components/Accordion";
import PageFullnitialReport from "./PageFullnitialReport";

const PreliminaryReport = () => {
    return (
            <div className={style.PreliminaryReportContainer}>
                <div className={ style.StepNow }>
                    <HeaderProcess />
                </div>
                <div className={style.Question}>
                    <Question />
                </div>
                <div className={style.AutoLayout}>
                    <OutputAutoLayout />
                </div>
                <div className={style.SchoolDetails}>
                    <SchoolDetails />
                </div>
                <div className={style.PreliminaryReportPage}>
                    <PageFullnitialReport />
                    {/*delete it and component itself after it*/}
                    {/*<Page /> <FullInitialReport />*/}
                </div>
            </div>

    );
};

export default PreliminaryReport;