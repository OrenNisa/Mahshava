import './App.css';
import Creator from './components/Creator';
import SurveyList from './components/SurveyList';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

class App extends React.Component {

    buttonStyle = {
        position: 'relative',
        marginLeft: '20px',
        left: '38.5%',
        top: '150px',
        width: '150px',
        height: '150px',
        fontSize: '18px',
        backgroundColor: 'lightblue',
        borderRadius: '100px',
    }

    titleStyle = {
        position: 'relative',
        textAlign: 'center',
        color: 'darkblue',
        top: '40px',
        fontFamily: 'Helvetica',
        fontSize: '75px',
    }

    render() {
        return (
            // <>
            //     <h1 style={this.titleStyle}>Surveys</h1>
            //    <input style={this.buttonStyle} type='button' value='Survey Creator' onClick={this.renderCreator} />
            //     <input style={this.buttonStyle} type='button' value='Survey List' onClick={this.renderSurveyList} />
            // </>
            <BrowserRouter>
                <Routes>
                    <Route path="/Creator" element={<Creator />} />
                </Routes>
            </BrowserRouter>
        );
    }

    // renderCreator() {
    //
    //     ReactDOM.render(<Creator/>, document.getElementById('root'));
    // }
    //
    // renderSurveyList() {
    //     ReactDOM.render(<SurveyList/>, document.getElementById('root'));
    // }
}

export default App;