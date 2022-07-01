import React from "react";
import styled from './Details.module.css'
import {useSurveyResults} from "../../../SchoolsContext";

function DetailsB() {
    const surveyResultsData = useSurveyResults().surveyResultsData

    const DetailsB =[
        {
            title: <div className='title1'>
                <span className={styled.LineTitle1}><b>שותפויות יעילות  </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.relationshipNetworksSurvey.values[0]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText7}>
                <a>נמדדת במידת הבנת מערכות היחסים בין השותפים והמשאבים שהארגון מקצה להן.
                <br/>
                    כמו כן בתכנון מוקדם המאפשר גישה למשאבים שהוא עשוי להזדקק להם מקרב ארגונים אחרים בזמן משבר.
                    </a>
					<br/>
            </span>
            </div>
        },
        {
            title: <div className='title1'>
                <span className={styled.LineTitle1}><b>רב מקצועיות</b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.relationshipNetworksSurvey.values[1]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText8}>
                <a>נמדדת ע"פ מידת מזעור מחסומים חברתיים, תרבותיים והתנהגותיים מפלגים, אשר הינם ביטוי של חסמי תקשורת היוצרים פירוקים, נתקים ודרכי עבודה מזיקות.
                <br/>
                    </a>
					<br/>
            </span>
            </div>
        },
        {
            title: <div className='title1'>
                <span className={styled.LineTitle1}><b>מינוף הידע </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.relationshipNetworksSurvey.values[2]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText9}>
                <a> נמדד ע"פ המידה בה מידע קריטי מאוחסן במספר פורמטים ומיקומים ולצוות יש גישה לחוות דעת של מומחים בעת הצורך.
                <br/>
                    כמו כן עד כמה התפקידים משותפים והצוות מאומן כך שמישהו תמיד יוכל למלא תפקידים מרכזיים.
                    </a>
					<br/>
            </span>
            </div>
        },
        {
            title: <div className='title1'>
                <span className={styled.LineTitle1}><b>משאביפ פנימיים </b></span>
                <span className={styled.LineTitle2}><b> {surveyResultsData.relationshipNetworksSurvey.values[3]}/7 </b> </span>
            </div>,
            content: <div className={styled.OutputText1}>
            <span className={styled.InText10}>
                <a>נמדדים ע"פי ניהול וניוד משאבי הארגון בכדי להבטיח את יכולתו לפעול במהלך השגרה, כמו גם להיות מסוגל לעמוד במשימות נוספות הנדרשות במהלך משבר.
                <br/>
                    </a>
					<br/>
            </span>
            </div>
        }

    ];
    return DetailsB;
}

export default DetailsB;