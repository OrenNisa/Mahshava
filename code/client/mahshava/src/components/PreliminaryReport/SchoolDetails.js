import React, {useState} from "react";
import CardContent from '@mui/material/CardContent';
import style from './SchoolDetails.module.css'
import {Avatar} from "@mui/material";
import LogoPolygon1 from "../mahshava-admin/LogoHelp/LogoPolygon1";
import LogoPolygon2 from "../mahshava-admin/LogoHelp/LogoPolygon2";
import Card from "@mui/material/Card";


const SchoolDetails = (props) => {

    return (
        <Card className={style.SchoolInformation}>
            <CardContent>
                <div className={style.SchoolsInProgress}>
                    <Avatar className={style.SchoolCounter}>
                        logo </Avatar> {/* Orange circle component. */}
                    <a>שם בית ספר</a>
                    <div className={style.Details}>
                        <LogoPolygon1 />  <h>פרטי בית ספר</h>
                    </div>
                    <div className={style.time}>
                        <LogoPolygon1 />  <h>לוח זמנים</h>
                    </div>

                </div>
            </CardContent>
        </Card>
    );
};
export default SchoolDetails ;

