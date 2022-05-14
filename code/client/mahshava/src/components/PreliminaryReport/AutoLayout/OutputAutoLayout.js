import React from 'react';
import style from './OutPutAutoLayout.module.css';
import Layout from "./Layout";
import DepthFocusAnswers from "./DepthFocusAnswers";
import SchoolQuestion from "./SchoolQuestion";
import QuestionAnswers from "./QuestionAnswers";
import ReportPreliminary from "./ReportPreliminary";
import DepthFocusQuestion from "./DepthFocusQuestion";
import GreenhouseReport from "./GreenhouseReport";
import Sharing from "./Sharing";
import Vector from "./Vector";

const OutPutAutoLayout = () => {
    return(
        <div className={style.Auto}>
            <Layout />
            <div className={style.SchoolQuestion}>
                <SchoolQuestion />
            </div>
            <div className={style.QuestionAnswers}>
                <QuestionAnswers />
            </div>
            <div className={style.ReportPreliminary}>
                <ReportPreliminary />
            </div>
            <div className={style.DepthFocusQuestion}>
                <DepthFocusQuestion />
            </div>
            <div className={style.DepthFocusAnswers}>
                <DepthFocusAnswers />
            </div>
            <div className={style.GreenhouseReport}>
                <GreenhouseReport />
            </div>
            <div className={style.Sharing}>
                <Sharing />
            </div>
            <div className={style.Vector}>
                <Vector />
            </div>


        </div>


    )

}
export default OutPutAutoLayout;