import React, {useState} from 'react';

import * as SurveyCreator from 'survey-creator-react';
import 'survey-core/survey.i18n.js';
import 'survey-creator-core/survey-creator-core.i18n.js';
import 'survey-core/defaultV2.css';
import 'survey-creator-core/survey-creator-core.css';
import service from '../api';
import {useLocation} from "react-router-dom";
//import { ChromePicker } from 'react-color';



function Creator() {

    const location = useLocation();

    const saveSurvey = () => {
        const survey = creator.text;
        service.SurveyService.saveSurvey(survey, location.state.surveyBackgroundColor).then(response => {
            console.log(response);
        });
    };

    const creatorOptions = {
        showEmbeddedSurveyTab: true,

    };

    const creator = new SurveyCreator.SurveyCreator(creatorOptions);
    //console.log("CREATOR TEXT"+creator.text)

    creator.saveSurveyFunc = saveSurvey;

    //const [creator, setCreator] = useState(null)
    //  const [color, setColor] = useState('#fff')
    //  const [showColorPicker, setShowColorPicker] = useState(false)

    // setCreator(new SurveyCreator.SurveyCreator(creatorOptions));
    // const handleColorChange = (color, e) =>{
    //         e.preventDefault()
    //         console.log(Object.keys(e))
    //         console.log(Object.values(e))
    //         console.log(Object.keys(color))
    //         console.log(Object.values(color))
    //         console.log(color.hex)
    //         setColor(color.hex)
    //
    //     };


    return (
        <>

        {/*<button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>*/}
        {/*    {showColorPicker ? ' close color picker' : 'Change survey background'}*/}
        {/*</button>*/}
        {/*{*/}
        {/*    showColorPicker && (<ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />)*/}
        {/*}*/}
        {/*<h2>You picked {color}</h2>*/}
        {/*<hr></hr>*/}
        <SurveyCreator.SurveyCreatorComponent creator={creator} />

    </>
    );
};

export default Creator;
