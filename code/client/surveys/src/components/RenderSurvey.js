import "survey-core/modern.min.css";
import 'survey-core/survey.min.css';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import service from "../api";
import {useEffect, useState} from "react";
import  {useLocation} from "react-router-dom";

StylesManager.applyTheme("orange");

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

    // const alertResults = useCallback((sender) => {
    //     const results = JSON.stringify(sender.data);
    //     alert(results);
    // }, []);

    // survey.onComplete.add(alertResults);

    return <Survey model={survey} />;
}

export default RenderSurvey;
