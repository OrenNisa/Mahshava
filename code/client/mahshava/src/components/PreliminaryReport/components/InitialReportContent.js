import './InitialReportContent.css';
import React from "react";
import Card from "@mui/material/Card";
import Img1 from "./Img1";
import Img2 from "./Img2";
import Img3 from "./Img3";
import AccordionData from "../Details/AccordionData";
import {useSchoolProcesses, useSurveyResults} from "../../../SchoolsContext";
import BarChart from "../BarChart";
import RadarChart from "../RadarChart";

function InitialReportContent() {
    const process = useSchoolProcesses().currentProcess
    const surveyResultsData = useSurveyResults().surveyResultsData
    const allFixedSurveysData = useSurveyResults().allFixedSurveysData
    const allAverages = useSurveyResults().curNumbersForReport.allAverages
    const idOfAverages = useSurveyResults().curNumbersForReport.idOfAverages

    const maxResult = surveyResultsData[Object.keys(surveyResultsData)[idOfAverages.idOfMaxAverage]];
    const secondResult = surveyResultsData[Object.keys(surveyResultsData)[idOfAverages.idOfSecondAverage]];
    const thirdResult = surveyResultsData[Object.keys(surveyResultsData)[idOfAverages.idOfThirdAverage]];

    const sumOfPoints = allAverages.reduce((partialSum, a) => partialSum + a, 0);
    const evaluationResult = (sumOfPoints / 21 * 100).toFixed(1)
    const tempArr = [[], [], []];
    const radarChartData = {
        labels: surveyResultsData.leadershipAndOrganizationalCultureSurvey.names.concat(
            surveyResultsData.relationshipNetworksSurvey.names.concat(
                surveyResultsData.willingnessToChangeSurvey.names)
        ),
        datasets: [
            {
                label: surveyResultsData.leadershipAndOrganizationalCultureSurvey.name,
                data: tempArr[0].concat(surveyResultsData.leadershipAndOrganizationalCultureSurvey.values, new Array(8).fill(0)),
                fill: true,
                backgroundColor: 'rgba(231, 133, 54, 0.5)',
                borderColor: 'rgb(231, 133, 54)',
                pointBorderColor: '#fff',
            },
            {
                label: surveyResultsData.relationshipNetworksSurvey.name,
                data: tempArr[1].concat(new Array(5).fill(0), surveyResultsData.relationshipNetworksSurvey.values, new Array(4).fill(0)),
                fill: true,
                backgroundColor: 'rgba(175, 206, 194, 0.5)',
                borderColor: 'rgb(175, 206, 194)',
                pointBorderColor: '#fff',
            },
            {
                label: surveyResultsData.willingnessToChangeSurvey.name,
                data: tempArr[2].concat(new Array(9).fill(0), surveyResultsData.willingnessToChangeSurvey.values),
                fill: true,
                backgroundColor: 'rgba(99, 119, 192, 0.5)',
                borderColor: 'rgb(99, 119, 192)',
                pointBorderColor: '#fff',
            }
        ],
    }

    const InitialReportContent = [
        {
            title: 'החוסן הארגוני',
            content:
                <div className='SizeR1'>
                    <div className='ss'>
                    <span className='Teexxt1'>
                        <b>חוסן הוא היכולת של ארגון לשרוד משבר ולשגשג בעולם של אי וודאות.</b></span>
                    <span className='Text2'>
                    <br/>
						באמצעות מחקר ובדיקה של ארגונים בעלי מאפיינים שונים כגון גודל, מגזר ומבנה אירגוני, זוקקו 31 רכיבים המרכיבים את רמת החוסן של ארגון.
						<br/>
						רכיבים אלה משפיעים על המסוגלות של ארגון להתמודד באופן יעיל עם משימותיו בשגרה, כמו כן על היכולת להתאושש ממשברים ומקרי קיצון.
						<br/>
                        <br/>
                </span>
                    </div>
                </div>
        },
        {
            title: 'רקע בית הספר',
            content:
                <div className='DetalisSchool'>
                    <div className='bb'>
                        <div className='TotalImg1'>
                    <div className='SizeImg1'>
                        <Img2/>
                    </div>
                    <div className='TextImg1'>
                        <b>
                            <span className='Line1'>בית ספר {process.schoolID.schoolName}</span>
                        </b>
                        <span className='Line2'>{process.schoolID.city}, {process.schoolID.district}</span>
                        <span
                            className='Line3'>{process.schoolID.religiousAffiliation}, {process.schoolID.lengthOfStudy}</span>
                    </div>
                        </div>
                        <div>
                    <div className='SizeImg2'>
                        <Img1/>
                    </div>
                    <div className='TextImg2'>
                        <b>
                            <span className='Line1a'>בסקר השתתפו</span>
                            <span className='Line1a1'><b> {process.schoolID.surveysRes.noOfParticipants} </b></span>
                            <br/>
                            <span className='Line2a'>מאנשי סגל בית הספר</span>
                            <br/>
                            <span className='Line3a'>
                                בין התאריכים
                            </span>
                            <span className='Line4a'>
                                {process.schoolID.surveysRes.startDate} - {process.schoolID.surveysRes.endDate}
                            </span>
                        </b>
                    </div>
                        </div>
                    <div className='SizeImg3'>
                        <Img3/>
                    </div>
                    <div className='TextImg3'>
                        <span className='Line1b'> <b> {process.schoolID.noOfStudents} </b>תלמידים</span>
                        <span className='Line2b'><b> {process.schoolID.noOfTeachers} </b> מורים ואנשי צוות </span>
                    </div>
                    </div>
                </div>

        },
        {
            title: 'תוצאות הערכה ',
            content:
                <div className='sizzee'>
                    <div className='TextData'>
                        <Card className='FullBack'>
                            <svg className='crid1' width="20" height="18" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle r="10" transform="matrix(1 0 0 -1 10 10)" fill="#E78536"/>
                            </svg>
                            <div className='LineC'>
                                <span> <b>מנהיגות ותרבות ארגונית </b></span>
                                <span className='num1'>5 מרכיבים</span>
                            </div>
                            <svg className='crid2' width="20" height="18" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle r="10" transform="matrix(1 0 0 -1 10 10)" fill="#AFCEC2"/>
                            </svg>
                            <div className='LineC1'>
                                <span> <b>רשתות של מערכות יחסים </b></span>
                                <span className='num2'>4 מרכיבים</span>
                            </div>
                            <svg className='crid3' width="20" height="18" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle r="10" transform="matrix(1 0 0 -1 10 10)" fill="#6377C0"/>
                            </svg>

                            <div className='LineC2'>
                                <span> <b> <b>מוכנות להשתנות </b></b></span>
                                <span className='num3'>4 מרכיבים</span>
                            </div>
                        </Card>
                        <div className='PointData'>
                            <span className='Lined1'><h1><b>{evaluationResult}%</b></h1></span>
                            <span className='a'>מדד החוסן הבית ספרי</span>
                            <span className='Linedd2'>שלכם הינו</span>
                            <span
                                className='b'>{evaluationResult > 75 ? "גבוה" : (evaluationResult > 50 ? "בינוני" : "נמוך")}</span>
                        </div>
                        <div className='SizeGroup'>
                            <RadarChart chartData={radarChartData}/>
                        </div>
                        <Card className='PointPow'>
                            <span className='TitlePointPow'> נקודת חוזקה </span>
                            <span className='TextPoint'>{maxResult.name}</span>
                            <span className='NumberPoint'>{allAverages[idOfAverages.idOfMaxAverage]}/7</span>
                            <div className='Group2'>
                                <BarChart chartData={allFixedSurveysData[idOfAverages.idOfSecondAverage]}/>
                            </div>
                        </Card>
                        <div className='TotalTex1'>
                        <span className='TitleResult'> נקודות לשיפור </span>
                        <span className='TextResult'>{secondResult.name}</span>
                        <span className='Num1Result'>{allAverages[idOfAverages.idOfSecondAverage]}/7</span>
                        <span className='Text2Result'>{thirdResult.name}</span>
                        <span className='Num2Result'> {allAverages[idOfAverages.idOfThirdAverage]}/7 </span>
                        <div className='SizeGrup1'>
                            <BarChart chartData={allFixedSurveysData[idOfAverages.idOfMaxAverage]}/>
                        </div>
                        <div className='SizeGrup2'>
                            <BarChart chartData={allFixedSurveysData[idOfAverages.idOfThirdAverage]}/>
                        </div>
                        </div>
                    </div>
                </div>
        },
        {
            title: 'פירוט הרכיבים',
            content: <div className='SizeSize'>
                <div className='FullInitialReport1'>
                    <AccordionData/>
                </div>
            </div>
        },
        {
            title: 'סיכום הדוח',
            content: <div className='SizeEnd'>
                <div className='TotalEnd'>
                <span className='TextELine1'>בחלק זה תוכלו לראות סיכום מטומצת של תוצאות השאלון, תוך התמקדות ברכיבי החוסן שניתן ורצוי לחזק</span>
                <br/><br/>
                <span className='TextELine2'>מן השאלון עולה כי מדד החוסן הבית ספרי הינו</span>
                <span
                    className='c'>{evaluationResult > 75 ? "גבוה" : (evaluationResult > 50 ? "בינוני" : "נמוך")}</span>
                    <br/>
                <span className='TextELine3'>  עם זאת זוהו מספר<b><b> מרכיבים שניתן לחזקם: </b></b> </span>
                <Card className='SizeBox1'>
                    <div className='TitleBox1'>{thirdResult.name}</div>
                    <span className='Line1Box1'>{thirdResult.names[thirdResult.values.indexOf(Math.min(...thirdResult.values))]}</span>
                    {/*<span className={styled.Text1Box1}> נמדדות ע"פ יכולת הפיתוח וההערכה של תוכניות ואסטרטגיות לניהול*/}
                    {/* <br/>משברים ביחס לתחום הפעילות והשותפים הרלוונטיים.</span>*/}
                    <span className='Line2Box1'>{thirdResult.names[thirdResult.values.indexOf(thirdResult.values.sort()[1])]}</span>
                    {/*<span className={styled.Text2Box1}>נמדדת ע"פ מידת השתתפות הצוות בסימולציות או בתרחישים שנועדו <br/>לתרגל הסדרי תגובה ולאמת תוכניות.</span>*/}
                </Card>
                <Card className='SizeBox2'>
                    <div className='TitleBox2'>{secondResult.name}</div>
                    <span className='LineBox2'>{secondResult.names[secondResult.values.indexOf(Math.min(...secondResult.values))]}</span>
                {/*    <span className={styled.TextBox2}>*/}
                {/*    נמדד בדרגות החופש שיש לצוות לקבל החלטות הקשורות לעבודתם <br/> ושהסמכות לכך מואצלת באופן ברור כדי לאפשר תגובה מהירה*/}
                {/*    <br/> למשבר. כמו כן משפיעים גם מידת המיומנות, הידע הספציפי, <br/> והמעורבות של הצוות .*/}
                {/*</span>*/}
                </Card>
                <Card className='SizeBox3'>
                    <div className='TitleBox3'>{maxResult.name}</div>
                    <span className='LineBox3'>{maxResult.names[maxResult.values.indexOf(Math.min(...maxResult.values))]}</span>
                {/*    <span className={styled.TextBox3}>*/}
                {/*    נמדדים ע"פי ניהול וניוד משאבי הארגון בכדי להבטיח את יכולתו <br/>*/}
                {/*    לפעול במהלך השגרה, כמו גם להיות מסוגל לעמוד במשימות נוספות,<br/>*/}
                {/*    הנדרשות במהלך משבר.*/}
                {/*</span>*/}
                </Card>
                <div className='EndImg'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18.0254" cy="18.2876" r="17.5" fill="#E78536"/>
                        <path
                            d="M19.5752 23.1665H15.9277L15.4004 8.45947H20.1025L19.5752 23.1665ZM15.2832 27.7075C15.2832 27.0435 15.5078 26.4917 15.957 26.0522C16.4062 25.603 17.002 25.3784 17.7441 25.3784C18.4961 25.3784 19.0967 25.603 19.5459 26.0522C19.9951 26.4917 20.2197 27.0435 20.2197 27.7075C20.2197 28.3716 19.9951 28.9282 19.5459 29.3774C19.0967 29.8169 18.4961 30.0366 17.7441 30.0366C17.002 30.0366 16.4062 29.8169 15.957 29.3774C15.5078 28.9282 15.2832 28.3716 15.2832 27.7075Z"
                            fill="white"/>
                    </svg>
                </div>
                <span className='Help'><b> חשוב לזכור <br/></b> </span>
                <div className='EndTextOF'>
                    על מנת להעמיק את הלמידה וההבנה של רמת החוסן הבית ספרי <br/>
                    מומלץ להשלים את התהליך האבחוני באמצעות קבוצת מיקוד וראיונות עומק.
                </div>
                </div>
            </div>
        },
        {
            title: 'המלצות לתוכנית התערבות',
            content: 'עדיין אין נתונים .'
        },
        {
            title: 'התייחסות נציג חממה',
            content: <div className='Size'>
            <span className='TextEnd'>
                    <br/>
         		מסמך זה מרכז בו ממצאים ראשוניים ונותן דוגמאות להתערבויות, הוא בסיס לשיח משותף ולגיבוש תוכנית התערבות וחיזוק המרכיבים השונים שנמדדו.
						<br/>
                <br/>
						חשוב לזכור כי רק בשלב המדידה הבא, לאחר ביצוע תוכנית החיזוק, נוכל לראות את ההשלכות של השקעת המשאבים על המרכיבים השונים.
						<br/>
                        <br/><br/>
                </span>
            </div>
        }
    ];

    return InitialReportContent;
}

export default InitialReportContent;



