import React from 'react';
import './App.css';
import { CreatorPage } from "./Creator";
import {BrowserRouter as Router, Switch} from  'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  SurveyJS Creator
                </a>
              </div>
            </div>
          </nav>
            <Switch>
                <CreatorPage />
            </Switch>
        </div>
      </Router>
  );
}

export default App;

