import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from  'react-router-dom';
import SurveyCreator from "./Creator";

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                                SurveyJS Creator
                        </div>
                    </div>
                </nav>
                <Switch>
                    <SurveyCreator/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;