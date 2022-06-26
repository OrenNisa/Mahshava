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
                        <div className={style.aass}>
                            <span className={style.aassTe1}>22 מורים </span>
                            <br/>
                            <span className={style.aassTe2}>330 תלמידים </span>
                            <br/>
                            <span className={style.aassTe3}>יועצת בית הספר: נוגה טור </span>
                            <br/>
                            <span className={style.aassTe4}>פסיכולוג בית הספר: מתן לוי </span>
                            <br/>
                            <span className={style.aassTe5}>תחילת תהליך: 24.05.2021 </span>
                        </div>
                    </div>
                    <div className={style.time}>
                        <LogoPolygon1 />  לוח זמנים
                        <span className={style.time1}> <b> 19/09</b>  יום א דוח ראשוני  </span>
                        <span className={style.time2}> <b> 26/09</b> יום ב בניית ראיונות עומק  </span>
                        <span className={style.time3}><b> 07/10</b>  יום ה דוח מסכם  </span>
                        <span className={style.time4}> <b> 21/10</b> יום ה תוכנית התערבות  </span>
                    </div>

                </div>
            </CardContent>
        </Card>
    );
};
export default SchoolDetails ;

