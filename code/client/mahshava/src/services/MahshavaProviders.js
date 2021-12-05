import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import I18NProvider from './i18n/I18NProvider';
import MahshavaContextProvider from './state/MahshavaContextProvider';

const theme = createTheme({ direction: 'rtl' });

const MahshavaProviders = ({ messages, children }) => {
    return (
        <MahshavaContextProvider>
            <Router>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <I18NProvider messages={messages}>{children}</I18NProvider>
                    </ThemeProvider>
                </StyledEngineProvider>
            </Router>
        </MahshavaContextProvider>
    );
};

export default MahshavaProviders;
