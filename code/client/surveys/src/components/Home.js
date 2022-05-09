import React from "react";
import { useNavigate } from 'react-router-dom';


function Home() {

    const creatorButtonStyle = {

        position: 'relative',
        marginLeft: '20px',
        left: '15%',
        bottom: '140px',
        width: '200px',
        height: '80px',
        fontSize: '25px',
        fontWeight: 'bold',
        //border: 'solid 0px black',
        //backgroundColor: 'lightblue',
        borderRadius: '10px',
    }

    const listButtonStyle = {

        position: 'relative',
        marginTop: '30px',
        left: '20%',
        fontWeight: 'bold',
        bottom: '140px',
        width: '200px',
        height: '80px',
        fontSize: '25px',

        borderRadius: '10px',
    }

    const homeBackground ={

        backgroundImage: 'url("https://cdn.discordapp.com/attachments/896788926193365033/970715609220391032/pexels-gradienta-7130468.jpg")',
        width: '100%',
        height: '100%',
        marginTop: '10%',
    }

    const logoStyle ={

        marginTop: '50px',
    }

    let navigate = useNavigate();

    return (
        <>
        <div style={homeBackground}>

            <img style={logoStyle} src={"https://cdn.discordapp.com/attachments/896788926193365033/970713087881654392/survey-system_logo.png"}/>

            <input type='button' style={creatorButtonStyle} value='CREATE' onClick={() => {navigate("/Creator")}}></input>
            <input type='button' style={listButtonStyle} value='LIST' onClick={() => {navigate("/SurveyList")}}></input>
        </div>

        </>
);
}

export default Home;