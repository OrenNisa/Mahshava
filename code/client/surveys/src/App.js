import logo from './logo.svg';
import './App.css';

function App() {
    const [survey, setSurvey] = useState(null);

    const saveOnClick = () => {
        service.SaveSurveyService.getSurvey(surveyData)
            .then(response => {
                setSurvey(response.survey)
            })
    }


    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={saveOnClick}>Save</button>
    </div>
  );
}

export default App;
