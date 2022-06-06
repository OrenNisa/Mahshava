import "survey-core/modern.min.css";
import 'survey-core/survey.min.css';
import {StylesManager, Model} from "survey-core";
import {Survey} from "survey-react-ui";
import service from "../api";
import {useLocation} from "react-router-dom";
import '../SurveyBrandingTest.css';
import {useCallback, useEffect, useState} from "react";

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


    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        service.SurveyService.saveSurveyResults(results, location.state.surveyTitle).then(response => {
            console.log(response);
        })
    }, []);

    survey.onComplete.add(alertResults);
)
    ;

}

export default RenderSurvey;
