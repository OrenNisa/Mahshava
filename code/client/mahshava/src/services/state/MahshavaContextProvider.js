import React, { createContext, useContext } from 'react';
import { useStateStateManager } from './hooks/useStateStateManager';
import { useAuthStateManager } from './hooks/useAuthStateManager';
import { useUserStateManager } from './hooks/useUserStateManager';

const MahshavaContext = createContext({});

const MahshavaContextProvider = ({ children }) => {
    const mahshavaStateState = useStateStateManager();
    const authState = useAuthStateManager();
    const userState = useUserStateManager();

    const mahshavaStateModel = {
        ...mahshavaStateState,
        ...authState,
        ...userState,
    };

    return <MahshavaContext.Provider value={mahshavaStateModel}>{children}</MahshavaContext.Provider>;
};

export default MahshavaContextProvider;

export const useMahshavaContext = () => useContext(MahshavaContext);
