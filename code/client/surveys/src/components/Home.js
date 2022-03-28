import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {

    const buttonStyle = {
    position: 'relative',
    marginLeft: '20px',
    left: '38.5%',
    top: '150px',
    width: '150px',
    height: '150px',
    fontSize: '18px',
    backgroundColor: 'lightblue',
    borderRadius: '100px',
}

const titleStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'darkblue',
    top: '40px',
    fontFamily: 'Helvetica',
    fontSize: '75px',
}

    let navigate = useNavigate();

    return (
        <>
        <h1 style={titleStyle}>Surveys</h1>

        <input type='button' style={buttonStyle} value='Survey Creator' onClick={() => {navigate("/Creator")}}></input>
        <input type='button' style={buttonStyle} value='Survey List' onClick={() => {navigate("/SurveyList")}}></input>
        </>
);
}

export default Home;