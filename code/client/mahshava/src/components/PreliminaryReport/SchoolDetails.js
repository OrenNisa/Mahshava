import CardContent from '@mui/material/CardContent';
import style from './SchoolDetails.module.css'
import {Avatar} from "@mui/material";
import LogoPolygon1 from "../mahshava-admin/LogoHelp/LogoPolygon1";
import Card from "@mui/material/Card";
import {useSchoolProcesses} from "../../SchoolsContext";

const SchoolDetails = () => {
    const process = useSchoolProcesses().currentProcess

    return (
        <Card className={style.SchoolInformation}>
            <CardContent>
                <div className={style.SchoolsInProgress}>
                    <Avatar className={style.SchoolCounter} src={process.schoolID.pic}>
                        {process.schoolID.id} </Avatar>
                    <a>{process.schoolID.schoolName}</a>
                    <div className={style.Details}>
                        <LogoPolygon1 />  פרטי בית ספר
                        <div className={style.aass}>
                            <span className={style.aassTe1}>{process.schoolID.noOfTeachers} מורים </span>
                            <br/>
                            <span className={style.aassTe2}>{process.schoolID.noOfStudents} תלמידים </span>
                            <br/>
                            <span className={style.aassTe3}>יועצת בית הספר: {process.schoolID.consultant} </span>
                            <br/>
                            <span className={style.aassTe4}>פסיכולוג בית הספר: {process.schoolID.psychologist} </span>
                            <br/>
                            <span className={style.aassTe5}>תחילת תהליך: {process.schoolID.processStartDate} </span>
                        </div>
                    </div>
                    <div className={style.time}>
                        <LogoPolygon1 />  לוח זמנים
                        <span className={style.time1}>{process.schedule}</span>
                    </div>

                </div>
            </CardContent>
        </Card>
    );
};
export default SchoolDetails ;

