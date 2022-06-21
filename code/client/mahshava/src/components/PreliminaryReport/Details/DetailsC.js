import React from "react";
import styled from './Details.module.css'
import {useSurveyResults} from "../../../SchoolsContext";


function DetailsC() {
    const surveyResultsData = useSurveyResults().surveyResultsData

    const DetailsC =[
        {
            title: <div className='title1'>
                <span className={styled.LineTitle1}><b>עמדה פרואקטיבית </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.willingnessToChangeSurvey.values[0]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText7}>
                <a>נמדדת ע"פ רמת המוכנות האסטרטגית וההתנהגותית להגיב לאזהרה מוקדמת ולזהות אותות לשינוי
                <br/>
                    בסביבתו הפנימית והחיצונית של הארגון לפני שהם מסלימים לכדי משבר.
                    </a>
					<br/>
            </span>
            </div>
        },
        {
            title: <div className='title1'>
                <span className={styled.LineTitle1}><b>בהירות מטרה</b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.willingnessToChangeSurvey.values[1]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText8}>
                <a>נמדדת ע"פ רמת מודעות גבוהה לסדרי העדיפויות של הארגון בעקבות משבר, המוגדר בבירור ברמה הארגונית,
                <br/>
                    כמו גם הבנת דרישות התפעול המינימליות הנדרשות מו הארגון.
                    </a>
					<br/>
            </span>
            </div>
        },
        {
            title: <div className='title1'>
                <span className={styled.LineTitle1}><b> בדיקת תוכניות </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.willingnessToChangeSurvey.values[2]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText9}>
                <a> נמדד ע"פ מידת השתתפות הצוות בסימולציות או בתרחישים שנועדו לתרגל הסדרי תגובה ולאמת תוכניות.
                <br/>
                    </a>
					<br/>
            </span>
            </div>
        },
        {
            title: <div className='title1'>
                <span className={styled.LineTitle1}><b>אסטרטגיית תכנון </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.willingnessToChangeSurvey.values[3]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText10}>
                <a>נמדדים ע"פ יכולת הפיתוח וההערכה של תוכניות ואסטרטגיות לניהול משברים ביחס לתחום הפעילות והשותפים הרלוונטיים.
                <br/>
                    </a>
					<br/>
            </span>
            </div>
        }

    ];

    return DetailsC;
}

export default DetailsC;