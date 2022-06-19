import "survey-core/modern.min.css";
import 'survey-core/survey.min.css';
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import service from "../api";
import {useCallback, useEffect, useState} from "react";
import  {useLocation, useNavigate} from "react-router-dom";
import '../SurveyBranding.css';


function RenderSurvey() {

    const [surveyJSON, setSurveyJSON] = useState(null);
    const location = useLocation();

    useEffect(() => {

        service.SurveyService.getSurveyJSON(location.state.surveyID).then(response => {
            setSurveyJSON(response);
        });
    }, []);

    const survey = new Model(surveyJSON);
    survey.focusFirstQuestionAutomatic = false;

    const [surveyBackgroundColor, setSurveyBackgroundColor] = useState("#fff");

    useEffect(() => {

        service.SurveyService.getBackgroundColor(location.state.surveyID).then(response => {
            setSurveyBackgroundColor(response);
        });
    }, []);

    // saves the survey as JSON and its title into the database (on survey complete)
    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        service.SurveyService.saveSurveyResults(results, location.state.surveyTitle).then(response => {
            console.log(response);
        })


    }, []);


    survey.onComplete.add(alertResults);

    // Themes:

    const Orange_Theme = {

        question: {
            content: "orange-content",
            titleOnAnswer: "orange-question-title-answered",
        },

        title: "orange-sd-title",
    };

    const Green_Theme = {

        question: {
            content: "green-content",
            titleOnAnswer: "green-question-title-answered",
        },

        title: "green-sd-title",
    };

    const Blue_Theme = {

        question: {
            content: "blue-content",
            titleOnAnswer: "blue-question-title-answered",
        },

        title: "blue-sd-title",
    };

    const Pink_Theme = {

        question: {
            content: "pink-content",
            titleOnAnswer: "pink-question-title-answered",
        },

        title: "pink-sd-title",
    };

    const White_Theme = {

        question: {
            content: "white-content",
            titleOnAnswer: "white-question-title-answered",
        },

        title: "white-sd-title",
    };


    function renderSurveyWithBranding(Theme_Hex_Color) {

        switch (Theme_Hex_Color){

            case '#ffba2e':
                return <Survey className="mainSurvey" css={Orange_Theme} model={survey} />

            case '#92ff57':
                return <Survey className="mainSurvey" css={Green_Theme} model={survey} />

            case '#70e0d1':
                return <Survey className="mainSurvey" css={Blue_Theme} model={survey} />

            case '#fcb3cb':
                return <Survey className="mainSurvey" css={Pink_Theme} model={survey} />

            case '#fff':
                return <Survey className="mainSurvey" css={White_Theme} model={survey} />

            default:
                return <Survey className="mainSurvey" css={White_Theme} model={survey} />
        }
    }

    return renderSurveyWithBranding(surveyBackgroundColor)
}

export default RenderSurvey;
