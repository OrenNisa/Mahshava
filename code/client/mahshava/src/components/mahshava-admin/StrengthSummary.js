import React, {useState} from 'react';
import { useIntl } from 'react-intl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar } from '@mui/material';
import style from './StrengthSummary.module.css';
import LogoPolygon1 from "./LogoHelp/LogoPolygon1";
import LogoPolygon2 from "./LogoHelp/LogoPolygon2";
import "./StrengthSummary.css";


const StrengthSummary = (props) => {
    const { formatMessage } = useIntl();

    const items = ['ResilienceCheck', 'InterventionCheck', 'ReevaluationCheck'];
    const processNames =[formatMessage({ id: 'SchoolInformationSideBar.ResilienceCheck.header' }),
        formatMessage({ id: 'SchoolInformationSideBar.InterventionCheck.header' }),
        formatMessage({ id: 'SchoolInformationSideBar.ReevaluationCheck.header' })]

    const [clicked, setClicked] = useState([true,true,true]);
    const filteredSchoolsByProcess = (array, name) => {
        let count = 0;
        let arr = [];
        let len = array.length;
        for (let i = 0; i < len; i++) {
            let processName = array[i].processID.processName
            if (processName == name){
                count++;
                arr.push(array[i].schoolID);
            }
        }
        return {count, arr};
    }
    const toggle = index => {
        let newArr = [...clicked]
        newArr[index] = clicked[index] !== true;
        setClicked(newArr);
    };

    return (
        <Card className={style.SchoolInformation}>
            <CardContent>
                <div className={style.SchoolsInProgress}>
                    <Avatar className={style.SchoolCounter}> {props.schoolProcesses.length} </Avatar>
                    {formatMessage({ id: 'SchoolInformationSideBar.SchoolsInProgress.message' })}
                </div>

                <div>
                    {items.map((item, index) => { return (
                        <div key = {index}>
                            <div className={`${items[index]}`}>
                                <div className={style.SchoolProgressHeader} onClick={() => toggle(index)}>
                                    <span>{clicked[index] === true ? <LogoPolygon1 /> : <LogoPolygon2 />} </span>
                                    {formatMessage({ id: 'SchoolInformationSideBar.' + items[index] + '.header' })}
                                    <span className={style.HeaderAmount}>{filteredSchoolsByProcess(props.schoolProcesses, processNames[index]).count}</span>
                                    <span className={style.HeaderTotal}>/{props.schoolProcesses.length}</span>
                                </div>

                                {clicked[index] === true ? (
                                    <ul>
                                        {filteredSchoolsByProcess(props.schoolProcesses, processNames[index]).arr.map(school => {
                                            return (
                                                <div key = {school.id}><li>בית ספר {school.schoolName}</li> </div>
                                            )
                                        })}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    )
                    })}
                </div>
            </CardContent>
        </Card>
    );
};
export default StrengthSummary;

