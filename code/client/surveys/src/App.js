import './App.css';
import Creator from './components/Creator';
import SurveyList from './components/SurveyList';
import Home from './components/Home';
import RenderSurvey from "./components/RenderSurvey";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SurveyBranding from "./components/SurveyBranding";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Creator" element={<Creator />} />
                <Route path="/SurveyList" element={<SurveyList />} />
                <Route path="/RenderSurvey" element={<RenderSurvey />} />
                <Route path="/SurveyBranding" element={<SurveyBranding />} />
            </Routes>
        </Router>
    );
};

export default App;