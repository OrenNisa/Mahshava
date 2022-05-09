import "survey-core/modern.min.css";
import 'survey-core/survey.min.css';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("orange");

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
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;

    // const alertResults = useCallback((sender) => {
    //     const results = JSON.stringify(sender.data);
    //     alert(results);
    // }, []);

    // survey.onComplete.add(alertResults);

    return <Survey model={survey} />;
}

export default App;
