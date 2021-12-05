import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadLocaleData } from './services/i18n/I18NProvider';
import MahshavaProviders from './services/MahshavaProviders';
import './index.css';

(async () => {
    const messages = await loadLocaleData();

    ReactDOM.render(
        <React.StrictMode>
            <MahshavaProviders messages={messages}>
                <App />
            </MahshavaProviders>
        </React.StrictMode>,
        document.getElementById('root')
    );
})();
