import styled from './Data.module.css'
import React from "react";
import ImgAsset from "../img";
import Card from "@mui/material/Card";
import Img1 from "./Img1";
import Img2 from "./Img2";
import Img3 from "./Img3";
import AccordionData from "../Details/AccordionData";

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
                        <br/>
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
        content: <div className={styled.SizeLength}>
                <Card className={styled.FullInitialReport}>
                    <div className={styled.NewData}> <AccordionData/></div>
                </Card>
        </div>
    },
    {
        title: 'סיכום הדוח',
        content: <div className={styled.SizeEnd}>
            <span className={styled.TextELine1}>בחלק זה תוכלו לראות סיכום מטומצת של תוצאות השאלון, תוך התמקדות ברכיבי החוסן שניתן ורצוי לחזק</span>
            <br/><br/>
            <span className={styled.TextELine2}>מן השאלון עולה כי מדד החוסן הבית ספרי הינו</span>
            <span className={styled.c}>גבוה</span>
            <span className={styled.TextELine3}>  עם זאת זוהו מספר<b><b> מרכיבים שניתן לחזקם: </b></b> </span>
            <Card className={styled.SizeBox1}>
                <div className={styled.TitalBox1}>מוכנות להשתנות</div>
                <span className={styled.Line1Box1}>אסטרטגיית תכנון</span>
                <span className={styled.Text1Box1}> נמדדות ע"פ יכולת הפיתוח וההערכה של תוכניות ואסטרטגיות לניהול
                     <br/>משברים ביחס לתחום הפעילות והשותפים הרלוונטיים.</span>
                <span className={styled.Line2Box1}> בדיקת תוכניות</span>
                <span className={styled.Text2Box1}>נמדדת ע"פ מידת השתתפות הצוות בסימולציות או בתרחישים שנועדו <br/>לתרגל הסדרי תגובה ולאמת תוכניות.</span>
            </Card>
            <Card className={styled.SizeBox2}>
                <div className={styled.TitalBox2}> מנהיגות ותרבות אירגונית</div>
                <span className={styled.LineBox2}>קבלת החלטות</span>
                <span className={styled.TextBox2}>
                    נמדד בדרגות החופש שיש לצוות לקבל החלטות הקשורות לעבודתם <br/> ושהסמכות לכך מואצלת באופן ברור כדי לאפשר תגובה מהירה
                    <br/> למשבר. כמו כן משפיעים גם מידת המיומנות, הידע הספציפי, <br/> והמעורבות של הצוות .
                </span>
            </Card>
            <Card className={styled.SizeBox3}>
                <div className={styled.TitalBox3}>רשתות של מערכות יחסים</div>
                <span className={styled.LineBox3}> משאבים פנימיים</span>
                <span className={styled.TextBox3}>
                    נמדדים ע"פי ניהול וניוד משאבי הארגון בכדי להבטיח את יכולתו <br/>
                    לפעול במהלך השגרה, כמו גם להיות מסוגל לעמוד במשימות נוספות,<br/>
                    הנדרשות במהלך משבר.
                </span>
            </Card>
            <div className={styled.EndImg}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18.0254" cy="18.2876" r="17.5" fill="#E78536"/>
                    <path d="M19.5752 23.1665H15.9277L15.4004 8.45947H20.1025L19.5752 23.1665ZM15.2832 27.7075C15.2832 27.0435 15.5078 26.4917 15.957 26.0522C16.4062 25.603 17.002 25.3784 17.7441 25.3784C18.4961 25.3784 19.0967 25.603 19.5459 26.0522C19.9951 26.4917 20.2197 27.0435 20.2197 27.7075C20.2197 28.3716 19.9951 28.9282 19.5459 29.3774C19.0967 29.8169 18.4961 30.0366 17.7441 30.0366C17.002 30.0366 16.4062 29.8169 15.957 29.3774C15.5078 28.9282 15.2832 28.3716 15.2832 27.7075Z" fill="white"/>
                </svg>
            </div>
            <span className={styled.Help}><b> חשוב לזכור <br/></b> </span>
            <div className={styled.EndTextOF}>
                על מנת להעמיק את הלמידה וההבנה של רמת החוסן הבית ספרי <br/>
                  מומלץ להשלים את התהליך האבחוני באמצעות קבוצת מיקוד וראיונות עומק.
            </div>

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