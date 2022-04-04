import React from 'react';
import { useIntl } from 'react-intl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar } from '@mui/material';
import style from './StrengthSummary.module.css';
import LogoPolygon1 from "./LogoHelp/LogoPolygon1";
import LogoPolygon2 from "./LogoHelp/LogoPolygon2";


const StrengthSummary = () => {
    const { formatMessage } = useIntl();
    return (
        <Card className={style.SchoolInformation}>
            <CardContent>
                <div className={style.SchoolsInProgress}>
                    {/* TODO: Pull school amount from database. */}
                    <Avatar className={style.SchoolCounter}> 6 </Avatar> {/* Orange circle component. */}
                    {formatMessage({ id: 'SchoolInformationSideBar.SchoolsInProgress.message' })}
                </div>

                <div className={style.ResilienceCheck}>
                    <div className={style.SchoolProgressHeader}>
                        <LogoPolygon2 /> {formatMessage({ id: 'SchoolInformationSideBar.ResilienceCheck.header' })}
                        {/* TODO: Pull amount of schools out of total. */}
                        <span className={style.HeaderAmount}>4</span>
                        <span className={style.HeaderTotal}>/6</span>
                    </div>

                    <ul>
                        {/* TODO: Pull school list from database.*/}
                        <li>{formatMessage({ id: 'SchoolInformationSideBar.ResilienceCheck.placeholderSchool1' })}</li>
                        <li>{formatMessage({ id: 'SchoolInformationSideBar.ResilienceCheck.placeholderSchool2' })}</li>
                        <li>{formatMessage({ id: 'SchoolInformationSideBar.ResilienceCheck.placeholderSchool3' })}</li>
                    </ul>
                </div>

                <div className={style.InterventionCheck}>
                    <div className={style.SchoolProgressHeader}>
                        <LogoPolygon2 /> {formatMessage({ id: 'SchoolInformationSideBar.InterventionCheck.header' })}
                        {/* TODO: Pull amount of schools out of total. */}
                        <span className={style.HeaderAmount}>2</span>
                        <span className={style.HeaderTotal}>/6</span>
                    </div>

                    <ul>
                        {/* TODO: Pull school list from database.*/}
                        <li>
                            {formatMessage({ id: 'SchoolInformationSideBar.InterventionCheck.placeholderSchool1' })}
                        </li>
                        <li>
                            {formatMessage({ id: 'SchoolInformationSideBar.InterventionCheck.placeholderSchool2' })}
                        </li>
                    </ul>
                </div>

                <div className={style.InterventionCheck}>
                    <div className={style.SchoolProgressHeader}>
                        <LogoPolygon1 /> {formatMessage({ id: 'SchoolInformationSideBar.ReevaluationCheck.header' })}
                        {/* TODO: Pull amount of schools out of total. */}
                        <span className={style.HeaderAmount}>0</span>
                        <span className={style.HeaderTotal}>/6</span>
                        {/* TODO: Pull school list from database.*/}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
export default StrengthSummary;

