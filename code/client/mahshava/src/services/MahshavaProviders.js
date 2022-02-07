import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { heIL } from '@mui/material/locale';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import I18NProvider from './i18n/I18NProvider';
import MahshavaContextProvider from './state/MahshavaContextProvider';

const cacheRtl = createCache({ key: 'muirtl', stylisPlugins: [rtlPlugin] });

const theme = createTheme({ direction: 'rtl' }, heIL);

const MahshavaProviders = ({ messages, children }) => {
    return (
        <MahshavaContextProvider>
            <Router>
                <StyledEngineProvider injectFirst>
                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <I18NProvider messages={messages}>{children}</I18NProvider>
                        </ThemeProvider>
                    </CacheProvider>
                </StyledEngineProvider>
            </Router>
        </MahshavaContextProvider>
    );
};

export default MahshavaProviders;
