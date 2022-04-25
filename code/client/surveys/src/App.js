import './App.css';
import Creator from './components/Creator';
import SurveyList from './components/SurveyList';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Creator" element={<Creator />} />
                <Route path="/SurveyList" element={<SurveyList />} />
            </Routes>
        </Router>
    );
};

export default App;