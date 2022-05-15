import React from 'react';
import style from './PreliminaryReport.module.css';
import HeaderProcess from "./Process/HeaderProcess";
import OutputAutoLayout from "./AutoLayout/OutputAutoLayout";
import SchoolDetails from "./SchoolDetails"
import Page from "./Page";
import Question from "./AutoLayout/Question";

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
                    <Page />
                </div>
            </div>

    );
};

export default PreliminaryReport;