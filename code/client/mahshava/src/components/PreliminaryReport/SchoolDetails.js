import CardContent from '@mui/material/CardContent';
import style from './SchoolDetails.module.css'
import {Avatar} from "@mui/material";
import LogoPolygon1 from "../mahshava-admin/LogoHelp/LogoPolygon1";
import Card from "@mui/material/Card";


const SchoolDetails = () => {

    return (
        <Card className={style.SchoolInformation}>
            <CardContent>
                <div className={style.SchoolsInProgress}>
                    <Avatar className={style.SchoolCounter}>
                        logo </Avatar> {/* Orange circle component. */}
                    <a>שם בית ספר</a>
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

