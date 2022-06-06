import CardContent from '@mui/material/CardContent';
import style from './SchoolDetails.module.css'
import {Avatar} from "@mui/material";
import LogoPolygon1 from "../mahshava-admin/LogoHelp/LogoPolygon1";
import Card from "@mui/material/Card";
import {useSchools, useSchoolID} from "../../SchoolsContext";


const SchoolDetails = () => {
    const ID = useSchoolID().schoolID
    const schoolsInfo = useSchools()
    const school = schoolsInfo.find((item) => { return item.schoolID.id == ID; });
    const name = school.schoolID.schoolName

    return (
        <Card className={style.SchoolInformation}>
            <CardContent>
                <div className={style.SchoolsInProgress}>
                    <Avatar className={style.SchoolCounter}>
                        {ID} </Avatar> {/* Orange circle component. */}
                    <a>{name}</a>
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

