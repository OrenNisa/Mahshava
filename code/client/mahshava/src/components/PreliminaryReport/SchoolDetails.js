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
                    <Avatar className={style.SchoolCounter}>
                        {process.schoolID.id} </Avatar> {/* Orange circle component. */}
                    <a>{process.schoolID.schoolName}</a>
                    <div className={style.Details}>
                        <LogoPolygon1 />  פרטי בית ספר
                    </div>
                    <div className={style.time}>
                        <LogoPolygon1 />  לוח זמנים
                    </div>

                </div>
            </CardContent>
        </Card>
    );
};
export default SchoolDetails ;

