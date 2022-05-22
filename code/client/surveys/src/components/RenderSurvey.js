import "survey-core/modern.min.css";
import 'survey-core/survey.min.css';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import React from "react";
import '../App.css';

//StylesManager.applyTheme("modern");

const surveyJson = {
    "title": "Survey Demo",
    "description": "nothing special really",
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "What is your first name?"
                },
                {
                    "type": "checkbox",
                    "name": "question2",
                    "title": "What are your favorite colors?",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Blue"
                        },
                        {
                            "value": "item2",
                            "text": "Green"
                        },
                        {
                            "value": "item3",
                            "text": "Yellow"
                        },
                        {
                            "value": "item4",
                            "text": "Red"
                        }
                    ],
                    "noneText": "None of the above",
                    "selectAllText": "Red"
                },
                {
                    "type": "rating",
                    "name": "question3",
                    "title": "Rate our demo!",
                    "rateMax": 7
                },
                {
                    "type": "signaturepad",
                    "name": "question4",
                    "title": "Sign here:"
                }
            ]
        }
    ]
}

function App() {

    function orangeTheme() {
        StylesManager.applyTheme("orange");
    }

    function greyStoneTheme() {
        StylesManager.applyTheme("stone");
    }

    function blueWinterTheme() {
        StylesManager.applyTheme("winter");
    }

    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = true;

    // const alertResults = useCallback((sender) => {
    //     const results = JSON.stringify(sender.data);
    //     alert(results);
    // }, []);

    // survey.onComplete.add(alertResults);

    // <button  value='Orange style' onClick={styleOrange}></button>
    return <>
        <button className="orangeThemeButton" onClick={orangeTheme}></button>
        <button className="greyStoneThemeButton" onClick={greyStoneTheme}></button>
        <button className="blueWinterThemeButton" onClick={blueWinterTheme}></button>
        <Survey model={survey} />
    </>;
    //Check how to start function when button clicked, for some reason able to start every function once only.
}

export default App;
