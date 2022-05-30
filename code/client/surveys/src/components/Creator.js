import React from 'react';

import * as SurveyCreator from 'survey-creator-react';
import 'survey-core/survey.i18n.js';
import 'survey-creator-core/survey-creator-core.i18n.js';
import 'survey-core/defaultV2.css';
import 'survey-creator-core/survey-creator-core.css';
import service from '../api';
import { ChromePicker } from 'react-color';

function Creator() {

    const saveSurvey = () => {
        const survey = creator.text;
        service.SurveyService.saveSurvey(survey).then(response => {
            console.log(response);
        });
    };

    const creatorOptions = {
        showEmbeddedSurveyTab: true,

    };
    const creator = new SurveyCreator.SurveyCreator(creatorOptions);

    creator.saveSurveyFunc = saveSurvey;

    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)

    return <>
            <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
                {showColorPicker ? ' close color picker' : 'Change survey background'}
            </button>
            {
              showColorPicker && (<ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />)
            }
            <h2>You picked {color}</h2>
            <SurveyCreator.SurveyCreatorComponent creator={creator} />
    </>;
};

export default Creator;
