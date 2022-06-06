import React, {useState, useEffect} from 'react';
import service from "../api";
import { useNavigate } from 'react-router-dom';

function SurveyList() {

    const titleStyle = {
        position: 'relative',
        textAlign: 'center',
        color: 'darkblue',
        top: '40px',
        fontFamily: 'Helvetica',
        fontSize: '40px',
    }

    const tableStyle = {
        position: 'relative',
        overflow: 'scroll',
        height: '10cm',
        margin: 'auto',
        width: '40%',
        border: '2px solid lightgrey',
        padding: '10px',
        top: '80px',
        color: 'blue',
        overflowY: 'scroll',
        display: 'block',
    };

    const surveyListStyle = {
        position: 'relative',
        left: '175px',
        listStyleType: 'none',
        margin: '0',
        padding: '5px',
    }

    const inputStyle = {
        position: 'relative',
        left: '638px',
        top: '160px',
    }

    // allows navigation from this component (SurveyList.js) to the survey-rendering component (RenderSurvey.js)
    const navigate = useNavigate();

    // this state needs to be replaced (we no longer get just a single title, but a dictionary that consists of 2 arrays (id & title).
    const [surveyIdArray, setSurveyIdArray] = useState([]);
    const [surveyTitleArray, setSurveyTitleArray] = useState([]);
    const [surveyId, setSurveyId] = useState(0);

    // gets all survey IDs and Titles from the database into arrays
    useEffect(() => {
        service.SurveyService.getAllSurveys().then(response => {
            setSurveyIdArray(response.id);
            setSurveyTitleArray(response.title);
        });
    }, []);

    // sends the entered survey ID to the RenderSurvey.js component which will render the corresponding survey
    const getSurvey = (event) => {
        event.preventDefault()

        navigate("/RenderSurvey", {
            state: {
                surveyID: surveyId,
                surveyTitle: surveyTitleArray[surveyId - 1],
            }
        })
    }

    // returns a list of all survey titles
    const getTitleList = () => {
        return <ul style={surveyListStyle}>{surveyTitleArray.map(name => <li  key={name}> {name} </li>)}</ul>
    };

    // returns a list of all survey IDs
    const getIdList = () => {
        return <ul style={surveyListStyle}>{surveyIdArray.map(name => <li key={name}> {name} </li>)}</ul>
    };

    return (

        <div>

            <form style={inputStyle}>
            <input id='renderTextBox' placeholder={'Enter survey ID'} onChange={(event) => {
                setSurveyId(event.target.value)
            }}/>
            <input id='renderButton' type='button' value='Open Survey' onClick={getSurvey}></input>
            </form>

            <h1 style={titleStyle}>Choose a Survey</h1>

            <table style={tableStyle}>
                <tbody>
                    <tr>
                        <th style={surveyListStyle}>Survey ID</th>
                        <th style={surveyListStyle}>Survey Name</th>
                    </tr>
                    <tr>
                        <td>{getIdList()}</td>
                        <td>{getTitleList()}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default SurveyList;