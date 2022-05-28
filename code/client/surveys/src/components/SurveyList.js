import React, {useState, useEffect} from 'react';
import service from "../api";
import { useNavigate } from 'react-router-dom';

function SurveyList() {

    const titleStyle = {
        position: 'relative',
        textAlign: 'center',
        color: 'darkblue',
        top: '40px',
        fontFamily: 'Helvetica',
        fontSize: '40px',
    }

    const tableStyle = {
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

    const navigate = useNavigate();

    const [surveyTitle, setSurveyTitle] = useState(null);
    const [surveyId, setSurveyId] = useState(0);

    const getSurvey = (event) => {
        event.preventDefault()

        navigate("/RenderSurvey", {
            state: {
                surveyID: surveyId
            }
        })
    }

    useEffect(() => {

        service.SurveyListService.getSurveyTitle(2).then(response => {
            setSurveyTitle(response);
            console.log(surveyTitle);
        });
    }, []);

    return (

        <div>
            <form>
                <input placeholder={'Enter survey ID'} onChange={(event) => {
                    setSurveyId(event.target.value)
                }}/>
                <input type='button' value='Open Survey' onClick={getSurvey}></input>
            </form>
            <h1 style={titleStyle}>Choose a Survey</h1>

            <div style={tableStyle}>
                <div>{surveyTitle}</div>
            </div>
        </div>
    );
}

export default SurveyList;

// dummy survey list:

{/*<div>סקר שביעות רצון - מקיף כללי - כיתה א</div>*/
}
{/*<div>---------------------------------------------------------------------------------------------</div>*/
}
{/*<div>סקר שביעות רצון מקיף כללי - סגל מורים</div>*/
}
{/*<div>---------------------------------------------------------------------------------------------</div>*/
}
{/*<div>משוב - מקיף כללי - חטיבה עליונה</div>*/
}
{/*<div>---------------------------------------------------------------------------------------------</div>*/
}
{/*<div>שאלון מרצים - מכללת ספיר</div>*/
}
{/*<div>---------------------------------------------------------------------------------------------</div>*/
}
{/*<div>שאלון מדריכים - פנימיית רדינגטון</div>*/
}
{/*<div>---------------------------------------------------------------------------------------------</div>*/
}
{/*<div>שאלון שכבה ד' - ביה"ס אבירם</div>*/
}
{/*<div>---------------------------------------------------------------------------------------------</div>*/
}
{/*<div>משוב מרצים - מכללת דיין</div>*/
}
{/*<div>---------------------------------------------------------------------------------------------</div>*/
}
{/*<div>סקר איזור מגורים - האגודה לתרבות הדיור</div>*/
}
{/*<div>---------------------------------------------------------------------------------------------</div>*/
}
{/*<div>סקר הדגים - מכללת הסרטן הפריך</div>*/
}
{/*<div>---------------------------------------------------------------------------------------------</div>*/
}
{/*<div>שאלון מחזור - איכות הסביבה</div>*/
}