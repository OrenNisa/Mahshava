import styled from './Data.module.css'
import React from "react";
import ImgAsset from "../img";
import Card from "@mui/material/Card";
import Img1 from "./Img1";
import Img2 from "./Img2";
import Img3 from "./Img3";

export const Data = [
    {
        title: 'החוסן הארגוני',
        content:
            <div className={styled.sizee}>
                <span className={styled.Text1}>חוסן הוא היכולת של ארגון לשרוד משבר ולשגשג בעולם של אי וודאות.</span>
                <span className={styled.Text2}>
                    <br/>
						באמצעות מחקר ובדיקה של ארגונים בעלי מאפיינים שונים כגון גודל, מגזר ומבנה אירגוני, זוקקו 31 רכיבים המרכיבים את רמת החוסן של ארגון.
						<br/>
						רכיבים אלה משפיעים על המסוגלות של ארגון להתמודד באופן יעיל עם משימותיו בשגרה, כמו כן על היכולת להתאושש ממשברים ומקרי קיצון.
						<br/>
                        <br/><br/>
                </span>
            </div>
    },
    {
        title: 'רקע בית הספר',
        content:
            <div className={styled.DetalisSchool}>
                <div className={styled.SizeImg1}>
                    <Img2 />
                </div>
                <div className={styled.TextImg1}>
                    <b>
                        <span className='Line1'>בית ספר יסודי הרואה</span>
                    </b>
                    <span className='Line2'>שדרות, שער הנגב</span>
                    <span className='Line3'>ממלכתי דתי, 6 שנתי</span>
                </div>
                <div className={styled.SizeImg2}>
                    <Img1 />
                </div>
                <div className={styled.TextImg2}>
                    <b>
                        <span className='Line1a'>בסקר השתתפו</span>
                        <span className='Line1a1'><b> 56 </b></span>
                        <br/>
                        <span className='Line2a'>מאנשי סגל בית הספר</span>
                        <br/>
                        <span className='Line3a'>בין התאריכים <br/> 29.9.21 - 27.10.21</span>
                    </b>
                </div>
                <div className={styled.SizeImg3}>
                    <Img3 />
                </div>
                <div className={styled.TextImg3}>
                    <span className='Line1b'> <b> 845 </b>תלמידים</span>
                    <span className='Line2b'><b> 62 </b> מורים ואנשי צוות</span>
                </div>
            </div>

    },
    {
        title: 'תוצאות הערכה ',
        content:
            <div className={styled.sizzee}>
                <div className={styled.TextData}>
                    <Card className={styled.FullBack}>
                        <svg className={styled.crid1} width="15" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle r="10" transform="matrix(1 0 0 -1 10 10)" fill="#E78536"/>
                        </svg>
                        <div className={styled.LineC}>
                            <span> <b>מנהיגות ותרבות ארגונית </b></span>
                            <span className='num1'>5 מרכיבים</span>
                        </div>
                        <svg className={styled.crid2} width="15" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle r="10" transform="matrix(1 0 0 -1 10 10)" fill="#AFCEC2"/>
                        </svg>
                        <div className={styled.LineC1}>
                            <span> <b>רשתות של מערכות יחסים </b></span>
                            <span className='num1'>4 מרכיבים</span>
                        </div>
                        <svg className={styled.crid3} width="15" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle r="10" transform="matrix(1 0 0 -1 10 10)" fill="#6377C0"/>
                        </svg>

                        <div className={styled.LineC2}>
                            <span> <b>מוכנות להשתנות </b></span>
                            <span className='num1'>4 מרכיבים</span>
                        </div>
                </Card>
                        <div className={styled.PointData}>
                            <span className='Lined1'><h1><b>76.7%</b></h1></span>
                            <span className={styled.a}>מדד החוסן הבית ספרי</span>
                            <span className={styled.Linedd2}>שלכם הינו</span>
                            <span className={styled.b}>גבוה</span>

                        </div>
                    </div>
            </div>
    },
    {
        title: 'פירוט הרכיבים',
        content: 'אא ההה בבב .'
    },
    {
        title: 'סיכום הדוח',
        content: <div className={styled.sizzee}>
            <span className={styled.TextELine1}>בחלק זה תוכלו לראות סיכום מטומצת של תוצאות השאלון, תוך התמקדות ברכיבי החוסן שניתן ורצוי לחזק</span>
            <br/><br/>
            <span className={styled.TextELine2}>מן השאלון עולה כי מדד החוסן הבית ספרי הינו</span>
            <span className={styled.c}>גבוה</span>
            <span className={styled.TextELine3}>  עם זאת זוהו מספר<b><b> מרכיבים שניתן לחזקם: </b></b> </span>
        </div>
    },
    {
        title: 'המלצות לתוכנית התערבות',
        content: 'עדיין אין נתונים .'
    },
    {
        title: 'התייחסות נציג חממה',
        content: <div className={styled.sizee}>
            <span className={styled.TextEnd}>
                    <br/>
         		מסמך זה מרכז בו ממצאים ראשוניים ונותן דוגמאות להתערבויות, הוא בסיס לשיח משותף ולגיבוש תוכנית התערבות וחיזוק המרכיבים השונים שנמדדו.
						<br/>
						חשוב לזכור כי רק בשלב המדידה הבא, לאחר ביצוע תוכנית החיזוק, נוכל לראות את ההשלכות של השקעת המשאבים על המרכיבים השונים.
						<br/>
                        <br/><br/>
                </span>
        </div>
    }
];