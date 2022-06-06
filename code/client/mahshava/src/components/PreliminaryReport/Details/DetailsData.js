import React from "react";
import style from './DetailsData.module.css';
import AccordionDetails from "./AccordionDetails";
import AccordionDetailsB from "./AccordionDetailsB";


export const DetailsData = [
    {
        title: 'מנהיגות ותרבות אירגונית',
        content: <div className={style.sizee}>
            <div className={style.Text1}>
            <AccordionDetails />
        </div>
        </div>

    },
    {
        title: 'רשתות של מערכות יחסים',
        content: <div className={style.Text2}>
            <AccordionDetailsB />
        </div>
    },
    {
        title: 'מוכנות להשתנות',
        content: ''
    }
];