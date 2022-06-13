import React from 'react';
import * as SurveyCreator from 'survey-creator-react';
import 'survey-core/survey.i18n.js';
import 'survey-creator-core/survey-creator-core.i18n.js';
import 'survey-core/defaultV2.css';
import 'survey-creator-core/survey-creator-core.css';
import service from '../api';
import {useLocation} from "react-router-dom";


function Creator() {

    const location = useLocation();

    const saveSurvey = () => {
        const survey = creator.text;
        service.SurveyService.saveSurvey(survey, location.state.surveyBackgroundColor).then(response => {
            console.log(response);
        });
    };

    const creator = new SurveyCreator.SurveyCreator();

    creator.saveSurveyFunc = saveSurvey;

    return <SurveyCreator.SurveyCreatorComponent creator={creator}/>;
};

export default Creator;
