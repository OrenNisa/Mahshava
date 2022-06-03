import React from "react";
import '../App.css';

import { useNavigate } from 'react-router-dom';

function Home() {

    let navigate = useNavigate();

    return (
        <>
        <div className="homeBackground">

            <img className="logoStyle" src={"https://cdn.discordapp.com/attachments/896788926193365033/970713087881654392/survey-system_logo.png"}/>

            {/*<input type='button' className="creatorButtonStyle" value='CREATE' onClick={() => {navigate("/Creator")}}></input>*/}
            <input type='button' className="creatorButtonStyle" value='CREATE' onClick={() => {navigate("/Branding")}}></input>
            <input type='button' className="listButtonStyle" value='LIST' onClick={() => {navigate("/SurveyList")}}></input>
        </div>

        </>
);
}

export default Home;