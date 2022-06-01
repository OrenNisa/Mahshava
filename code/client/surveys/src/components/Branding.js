import React, {useState} from 'react';
import service from '../api';
import { ChromePicker } from 'react-color';
import '../BrandingPage.css';
import {useNavigate} from "react-router-dom";


function Branding() {

    const sendColorToCreator = () =>{

        navigate("/Creator", {
            state: {
                surveyBackgroundColor: color
            }
        })
    }

    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)

    let navigate = useNavigate();

    return (
        <>
            <h1 className="Header">Before we start, brand your survey:
                <h2 className="SubTitle">Pick a background color for your survey
                    <hr></hr>
                    <button className="ColorPickerButton" onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
                        {showColorPicker ? ' close color picker' : 'Pick a color'}
                    </button>

                </h2>

                {/*changing div color dynamically*/}
                <div className= "ColorPreview" style={{backgroundColor: color}}></div>

                <button className={"NextButton"} onClick={sendColorToCreator}>Next</button>
            </h1>
            {
                showColorPicker && (<ChromePicker className="ChromePicker" color={color} onChange={updatedColor => setColor(updatedColor.hex)} />)
            }

            {/*<h2 className="UserChoice">You picked {color}</h2>*/}


        </>
    );
};

export default Branding;