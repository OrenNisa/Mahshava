import React from 'react';
import * as SurveyCreator from 'survey-creator-react';
import 'survey-core/survey.i18n.js';
import 'survey-creator-core/survey-creator-core.i18n.js';
import 'survey-core/defaultV2.css';
import 'survey-creator-core/survey-creator-core.css';
import service from '../api';
import {useLocation, useNavigate} from "react-router-dom";


function Creator() {

    const location = useLocation();
    const navigate = useNavigate();

    const saveSurvey = () => {
        const survey = creator.text;
        const surveyJSON = JSON.parse(survey);

        if (surveyJSON.hasOwnProperty('title')) {
            service.SurveyService.saveSurvey(survey, location.state.surveyBackgroundColor).then(response => {
                console.log(response);

                navigate("/", {});
                alert("Your Survey has been created!");
            });
        }
        else {
            alert("You must enter a title for the Survey before saving it.");
        }
    };

    const creator = new SurveyCreator.SurveyCreator();

    creator.saveSurveyFunc = saveSurvey;

    return <SurveyCreator.SurveyCreatorComponent creator={creator}/>;
};

export default Creator;
