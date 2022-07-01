import useLocalStorageState from 'use-local-storage-state';
import { getFromLocalStorage, STORAGE_MAHSHAVA_AUTH_STATE } from '../../storage/storage';
import { useCallback } from 'react';

const mahshavaAuthInitialState = getFromLocalStorage(STORAGE_MAHSHAVA_AUTH_STATE) || {};

export const useAuthStateManager = () => {
    const [mahshavaAuth, setMahshavaAuth] = useLocalStorageState(STORAGE_MAHSHAVA_AUTH_STATE, mahshavaAuthInitialState);

    const updateMahshavaAuth = useCallback(
        updatedMahshavaAuthState => {
            setMahshavaAuth(currentMahshavaAuthState => ({ ...currentMahshavaAuthState, ...updatedMahshavaAuthState }));
        },
        [setMahshavaAuth]
    );

    return { mahshavaAuth, updateMahshavaAuth };
};

