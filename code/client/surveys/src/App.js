import './App.css';
import Creator from './components/Creator';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <>
                <input type='button' value='Survey Creator' onClick={this.renderCreator} />
                <input type='button' value='Survey List' onClick={this.renderSurveyList} />
            </>
        );
    }

    renderCreator() {

        ReactDOM.render(<Creator/>, document.getElementById('root'));
    }

    renderSurveyList() {
        ReactDOM.render(<p>Testing</p>, document.getElementById('root'));
    }
}

export default App;