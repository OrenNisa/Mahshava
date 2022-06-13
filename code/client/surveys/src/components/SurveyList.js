import React, {useState, useEffect} from 'react';
import service from "../api";
import { useNavigate } from 'react-router-dom';
import '../SurveyList.css';


function SurveyList() {

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
        return <ul className="surveyList">{surveyTitleArray.map(name => <li  key={name}> {name} </li>)}</ul>
    };

    // returns a list of all survey IDs
    const getIdList = () => {
        return <ul className="surveyList">{surveyIdArray.map(name => <li key={name}> {name} </li>)}</ul>
    };

    return (

        <div>

            <h1 className="title">Choose a Survey</h1>

            <form className="input">
            <input id='renderTextBox' placeholder={'Enter survey ID'} onChange={(event) => {
                setSurveyId(event.target.value)
            }}/>
            <input id='renderButton' type='button' value='Open Survey' onClick={getSurvey}></input>
            </form>

            <table className="table">
                <tbody>
                    <tr>
                        <th className="surveyList">Survey ID</th>
                        <th className="surveyList">Survey Name</th>
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