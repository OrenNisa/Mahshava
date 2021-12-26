import React, { Component } from "react";
import * as SurveyJSCreator from "survey-creator";
import "survey-creator/survey-creator.css";

SurveyJSCreator.StylesManager.applyTheme("default");


class SurveyCreator extends Component {
    surveyCreator;
    componentDidMount() {
        let options = { showEmbededSurveyTab: true };
        this.surveyCreator = new SurveyJSCreator.SurveyCreator(
            null,
            options
        );
        this.surveyCreator.render("surveyCreatorContainer");
    }
    render() {
        return (<div>
            <div id="surveyCreatorContainer" />
        </div>);
    }
    saveMySurvey = () => {
        console.log(JSON.stringify(this.surveyCreator.text));
    };
}

export default SurveyCreator;