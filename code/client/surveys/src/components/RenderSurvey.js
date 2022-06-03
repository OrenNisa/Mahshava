import "survey-core/modern.min.css";
import 'survey-core/survey.min.css';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import service from "../api";
import {useEffect, useState} from "react";
import  {useLocation} from "react-router-dom";
import '../SurveyBranding.css';

//StylesManager.applyTheme("orange");

function RenderSurvey() {

    const [surveyJSON, setSurveyJSON] = useState(null);
    const location = useLocation();

    useEffect(() => {

        service.RenderService.getSurveyJSON(location.state.surveyID).then(response => {
            setSurveyJSON(response);
        });
    }, []);

    const survey = new Model(surveyJSON);
    survey.focusFirstQuestionAutomatic = false;

    const [surveyBackgroundColor, setSurveyBackgroundColor] = useState("#fff");

    useEffect(() => {

        service.BrandingService.getBackgroundColor(location.state.surveyID).then(response => {
            setSurveyBackgroundColor(response);
        });
    }, []);


    // const surveyBackground = document.getElementsByClassName("sv_main sv_body");
    // surveyBackground.style.backgroundColor = '#000';

     // const surveyBackgroundSelector = document.querySelector('.sv_main .sv_body');
     // surveyBackgroundSelector.backgroundColor = '#000';

    // let cssProperties = {
    //     '.mainSurvey .sv_body {background-color: blue;}'
    // }
    // cssProperties['sv_main sv_body'] = surveyBackgroundColor
    //
    // const surveyStyle = {
    //     '.mainSurvey sv_main sv_default_css': {
    //         backgroundColor: surveyBackgroundColor
    //     }
    // }

    console.log("before return");

    // const surveyBackground = document.getElementsByClassName("sv_main sv_body");
    // surveyBackground.style.backgroundColor = '#000';

    // const updateColor = () => {
    //     var color = `${surveyBackgroundColor}`;
    //     document.documentElement.style.setProperty(`--color`, `'${surveyBackgroundColor}'`);
    //
    // }

    // const myCss = {
    //     root: {
    //         border: '1px solid lightgray',
    //         borderRadius: '5px',
    //         borderLeft: '4px solid #18a689',
    //         padding: '10px',
    //         backgroundColor: 'black',
    //     },
    //     // question: {
    //     //     content: "sd-question__content question_content_custom",
    //     //     titleOnAnswer: "question-title-answered"
    //     // }
    // };


    return (
        <>
            <div className="surveyBackground" style={{backgroundColor: surveyBackgroundColor}}>

                <Survey className="mainSurvey" model={survey} />

                {/*<Survey className="mainSurvey" css={myCss} model={survey} />*/}

                {/*<Survey className="mainSurvey" model={survey} />*/}

            </div>

            {/*<Survey className="sv_main sv_body" style={{backgroundColor: surveyBackgroundColor}} model={survey} />*/}

            {/*<div className={cssProperties}><Survey model={survey} /></div>*/}
            {/*<Survey className="mainSurvey" style={surveyStyle} model={survey} />*/}



        </>



    );
                                                                                                                
}                                                                                                               
                                                                                                                
export default RenderSurvey;
