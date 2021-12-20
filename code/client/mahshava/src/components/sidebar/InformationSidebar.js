import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import style from './InformationSidebar.module.css';
import {Avatar} from "@mui/material";
import {useIntl} from "react-intl";

const InformationSidebar = () => {
    const { formatMessage } = useIntl();

    return (
        <Card className={style.SchoolInformation}>
            <CardContent>
                <div className={style.SchoolsInProgress}>
                    <Avatar className={style.SchoolCounter} > 6 </Avatar>
                    {formatMessage({ id: 'SchoolInformationSideBar.SchoolsInProgress.message' })}
                </div>

                <div className={style.ResilienceCheck}>
                    <div className={style.SchoolProgressHeader}>
                        ^  {formatMessage({ id: 'SchoolInformationSideBar.ResilienceCheck.header' })}
                        <span className={style.HeaderAmount}>4</span><span className={style.HeaderTotal}>/6</span>
                    </div>

                    <Typography variant="body2" color="text.secondary">
                        <p>{formatMessage({ id: 'SchoolInformationSideBar.ResilienceCheck.placeholderSchool1' })}</p>
                        <p>{formatMessage({ id: 'SchoolInformationSideBar.ResilienceCheck.placeholderSchool2' })}</p>
                        <p>{formatMessage({ id: 'SchoolInformationSideBar.ResilienceCheck.placeholderSchool3' })}</p>
                    </Typography>
                </div>

                <div className={style.InterventionCheck}>
                    <div className={style.SchoolProgressHeader}>
                        ^  {formatMessage({ id: 'SchoolInformationSideBar.InterventionCheck.header' })}
                        <span className={style.HeaderAmount}>2</span><span className={style.HeaderTotal}>/6</span>
                    </div>

                    <Typography variant="body2" color="text.secondary">
                        <p>{formatMessage({ id: 'SchoolInformationSideBar.InterventionCheck.placeholderSchool1' })}</p>
                        <p>{formatMessage({ id: 'SchoolInformationSideBar.InterventionCheck.placeholderSchool2' })}</p>
                    </Typography>
                </div>

                <div className={style.InterventionCheck}>
                    <div className={style.SchoolProgressHeader}>
                        V  {formatMessage({ id: 'SchoolInformationSideBar.ReevaluationCheck.header' })}
                        <span className={style.HeaderAmount}>0</span><span className={style.HeaderTotal}>/6</span>
                    </div>

                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}
export default InformationSidebar;
