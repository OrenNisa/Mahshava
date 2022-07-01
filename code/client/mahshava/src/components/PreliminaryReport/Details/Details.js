import React from "react";
import styled from './Details.module.css'
import {useSurveyResults} from "../../../SchoolsContext";

function Details() {
    const surveyResultsData = useSurveyResults().surveyResultsData

    const Details =[
        {
            title: <div className='title1'>
                <span className={styled.LineTitle1}><b>מודעות למצב  </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.leadershipAndOrganizationalCultureSurvey.values[0]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText1}>
                <a>נמדדת ע"פ רמת השותפות בין חבר הצוות, הבנת הקשר בין העבודה שלהם לעמידות ולחוסן של הארגון וההצלחה שלו
                <br/>
                לטווח הארוך, כמו כן נמדדת המעורבות באופן בין הצוות מוכוון ומעודד על יד ההנהלה להשתמש בכישוריו, כדי לפתור בעיות.
                    </a>
					<br/>
            </span>
            </div>
        },
        {
            title: <div className='title1'>
                <span className={styled.LineTitle1}><b>מעורבות הצוות  </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.leadershipAndOrganizationalCultureSurvey.values[1]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText2}>
                <a>נמדדת בהתנהלות מול משברים, הכרחית בכדי לנהל אותם בצורה טובה, לקבל החלטות באופן שקול
                <br/>
                לבצע הערכה ומדידה מתמדת של אסטרטגיות ותוכניות עבודה כנגד יעדים ארגוניים.
                    </a>
					<br/>
            </span>
            </div>
        },
        {
            title:  <div className='title1'>
                <span className={styled.LineTitle1}><b>לכידות הצוות  </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.leadershipAndOrganizationalCultureSurvey.values[2]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText3}>
                <a>נמדדת ע"פ רמת השותפות בין חבר הצוות, הבנת הקשר בין העבודה שלהם לעמידות ולחוסן של הארגון וההצלחה שלו
                <br/>
                לטווח הארוך, כמו כן נמדדת המעורבות באופן בין הצוות מוכוון ומעודד על יד ההנהלה להשתמש בכישוריו, כדי לפתור בעיות.
                    </a>
					<br/>
            </span>
            </div>
        },
        {
            title:  <div className='title1'>
                <span className={styled.LineTitle1}><b>חדשנות ויצירתיות  </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.leadershipAndOrganizationalCultureSurvey.values[3]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText4}>
                <a>נמדדת ע"פ המידה בה הצוות מעודד ומוערך לטובה על השימוש בידע שלו בבחירת דרכים חדשות
                <br/>
                לפתור בעיות חדשות וקיימות.
                    </a>
					<br/>
            </span>
            </div>
        },
        {
            title:  <div className='title1'>
                <span className={styled.LineTitle1}><b>קבלת ההחלטות </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.leadershipAndOrganizationalCultureSurvey.values[4]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText5}>
                <a>נמדדת בדרגות החופש שיש לצוות לקבל החלטות הקשורות לעבודתם ושהסמכות לכך מואצלת באופן ברור כדי
                <br/>
                לאפשר תגובה מהירה למשבר. כמו כן משפיעים גם מידת המיומנות, הידע הספציפי, והמעורבות של הצוות.
                    </a>
					<br/>
            </span>
            </div>
        },

    ];
    return Details;
}

export default Details;