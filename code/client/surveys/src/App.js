import './App.css';
import Creator from './components/Creator';
import SurveyList from './components/SurveyList';
import Home from './components/Home';
import RenderSurvey from "./components/RenderSurvey";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Branding from "./components/Branding";
import SurveyBranding from "./components/SurveyBranding";
import SurveyRendering from "./components/SurveyRendering";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Creator" element={<Creator />} />
                {/*<Route path="/Branding" element={<Branding />} />*/}
                <Route path="/SurveyList" element={<SurveyList />} />
                {/*<Route path="/RenderSurvey" element={<RenderSurvey />} />*/}
                <Route path="/SurveyRendering" element={<SurveyRendering />} />
                <Route path="/SurveyBranding" element={<SurveyBranding />} />
            </Routes>
        </Router>
    );
};

export default App;