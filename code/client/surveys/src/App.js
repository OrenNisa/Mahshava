import './App.css';
import Creator from './components/Creator';
import SurveyList from './components/SurveyList';
import Home from './components/Home';
import RenderSurvey from "./components/RenderSurvey";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Branding from "./components/Branding";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Creator" element={<Creator />} />
                <Route path="/Branding" element={<Branding />} />
                <Route path="/SurveyList" element={<SurveyList />} />
                <Route path="/RenderSurvey" element={<RenderSurvey />} />
            </Routes>
        </Router>
    );
};

export default App;