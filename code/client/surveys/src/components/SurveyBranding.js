import React, {useState} from 'react';
import service from '../api';
import { ChromePicker } from 'react-color';
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
        //sendColorToCreator();
        //console.log(color);
    }
    //
    const GreenHandler = () => {
        setColor('#92ff57');
        //sendColorToCreator();
        //console.log(color);
    }

    const BlueHandler = () => {
        setColor('#70e0d1');
        //sendColorToCreator();
        //console.log(color);
    };

    const PinkHandler = () => {
        setColor('#fcb3cb');
        //sendColorToCreator();
        //console.log(color);
    };

    const WhiteHandler = () => {
        setColor('#fff');
        //sendColorToCreator();
        //console.log(color);
    };

    // const printColorCode = () => {
    //     console.log(color);
    // }

    let navigate = useNavigate();

    return (
        <>
            <h1 className="Header">Before we start, brand your survey:
                <h2 className="SubTitle">Pick a theme color for your survey
                    <hr></hr>
                    {/*<button className="ColorPickerButton" onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>*/}
                    {/*    {showColorPicker ? ' close color picker' : 'Pick a color'}*/}
                    {/*</button>*/}

                    {/*<button className="OrangeButton" onClick={() => {setColor(color => '#ffba2e');sendColorToCreator()}}>Orange</button>*/}
                    <button className="OrangeButton" onClick={() => OrangeHandler()}>Orange</button>
                    <button className="GreenButton" onClick={() => GreenHandler()}>Green</button>
                    <button className="BlueButton" onClick={() => BlueHandler()}>Blue</button>
                    <button className="PinkButton" onClick={() => PinkHandler()}>Pink</button>
                    <button className="WhiteButton" onClick={() => WhiteHandler()}>White</button>

                </h2>

                <button className="NextStepButton" onClick={() => sendColorToCreator()}>Next</button>

                {/*<div className= "ColorPreview" style={{backgroundColor: color}}></div>*/}

                {/*<button className="NextButton" onClick={sendColorToCreator}>Next</button>*/}
            </h1>
            {/*{*/}
            {/*    showColorPicker && (<ChromePicker className="ChromePicker" color={color} onChange={updatedColor => setColor(updatedColor.hex)} />)*/}
            {/*}*/}

            {/*<h2 className="UserChoice">You picked {color}</h2>*/}


        </>
    );
};

export default SurveyBranding;