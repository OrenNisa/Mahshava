import React, {useState} from 'react';
import '../BrandingPage.css';
import {useNavigate} from "react-router-dom";


function SurveyBranding() {

    const sendColorToCreator = () =>{
        console.log(color);
        navigate("/Creator", {
            state: {
                surveyBackgroundColor: color
            }
        })
    }

    const [color, setColor] = useState('#fff')


    const OrangeHandler = () => {
        setColor('#ffba2e');
    }
    //
    const GreenHandler = () => {
        setColor('#92ff57');
    }

    const BlueHandler = () => {
        setColor('#70e0d1');
    };

    const PinkHandler = () => {
        setColor('#fcb3cb');
    };

    const WhiteHandler = () => {
        setColor('#fff');
    };

    let navigate = useNavigate();

    return (
        <>
            <h1 className="Header">Before we start, brand your survey:
                <h2 className="SubTitle">Pick a theme color for your survey

                    <hr></hr>

                    <button className="OrangeButton" onClick={() => OrangeHandler()}>Orange</button>
                    <button className="GreenButton" onClick={() => GreenHandler()}>Green</button>
                    <button className="BlueButton" onClick={() => BlueHandler()}>Blue</button>
                    <button className="PinkButton" onClick={() => PinkHandler()}>Pink</button>
                    <button className="WhiteButton" onClick={() => WhiteHandler()}>White</button>
                </h2>

                <button className="NextStepButton" onClick={() => sendColorToCreator()}>Next</button>

            </h1>
        </>
    );
};

export default SurveyBranding;