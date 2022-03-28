import React from 'react';
import ReactDOM from "react-dom";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class SurveyList extends React.Component {

    titleStyle = {
        position: 'relative',
        textAlign: 'center',
        color: 'darkblue',
        top: '40px',
        fontFamily: 'Helvetica',
        fontSize: '40px',

    }

    tableStyle = {
        position: 'relative',
        overflow: 'scroll',
        height: '10cm',
        margin: 'auto',
        width: '40%',
        border: '2px solid lightgrey',
        padding: '10px',
        top: '80px',
        textAlign: 'center',
        color: 'blue',
    };

    render() {
        return (
            <>
                <h1 style={this.titleStyle}>Choose a Survey</h1>
                <div style={this.tableStyle}>
                    Test
                </div>
            </>
        );
    }
}



export default SurveyList;

// dummy list:

{/*<div>סקר שביעות רצון - מקיף כללי - כיתה א</div>*/}
{/*<div>---------------------------------------------------------------------------------------------</div>*/}
{/*<div>סקר שביעות רצון מקיף כללי - סגל מורים</div>*/}
{/*<div>---------------------------------------------------------------------------------------------</div>*/}
{/*<div>משוב - מקיף כללי - חטיבה עליונה</div>*/}
{/*<div>---------------------------------------------------------------------------------------------</div>*/}
{/*<div>שאלון מרצים - מכללת ספיר</div>*/}
{/*<div>---------------------------------------------------------------------------------------------</div>*/}
{/*<div>שאלון מדריכים - פנימיית רדינגטון</div>*/}
{/*<div>---------------------------------------------------------------------------------------------</div>*/}
{/*<div>שאלון שכבה ד' - ביה"ס אבירם</div>*/}
{/*<div>---------------------------------------------------------------------------------------------</div>*/}
{/*<div>משוב מרצים - מכללת דיין</div>*/}
{/*<div>---------------------------------------------------------------------------------------------</div>*/}
{/*<div>סקר איזור מגורים - האגודה לתרבות הדיור</div>*/}
{/*<div>---------------------------------------------------------------------------------------------</div>*/}
{/*<div>סקר הדגים - מכללת הסרטן הפריך</div>*/}
{/*<div>---------------------------------------------------------------------------------------------</div>*/}
{/*<div>שאלון מחזור - איכות הסביבה</div>*/}