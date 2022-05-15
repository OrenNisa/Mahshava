import React from 'react';
import style from './HeaderProcess.module.css';
import StepProcess from "./StepProcess";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import CurrentStage from "./CurrentStage";
import EvaluationResilience from "./EvaluationResilience";
import TheQuestion from "./TheQuestion";
import Group from "./Group";
import Line from "./Line";

const HeaderProcess = () => {
    return (
        <div className={style.ProcessNow}>
            <div className={style.Current}>
                <CurrentStage />
            </div>
            <div className={style.ProcessName}>
                <EvaluationResilience />
            </div>
            <div className={style.Size}>
               <div className={style.Question}>
                  <TheQuestion />
               </div>
               <div className={style.Group}>
                  <Group />
               </div>
                <div className={style.Line}>
                   <Line />
                </div>
                <div className={style.MainProcess}>
                    <StepProcess />
                </div>
                <div className={style.One}>
                    <StepOne />
                </div>
                <div className={style.Two}>
                    <StepTwo />
                </div>
                <div className={style.Three}>
                    <StepThree />
                </div>
            </div>
        </div>
    );
};

export default HeaderProcess;


