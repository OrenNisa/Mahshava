import { useCallback, useState } from 'react';

const mahshavaUserInitialState = {};

export const useUserStateManager = () => {
    const [mahshavaUser, setMahshavaUser] = useState(mahshavaUserInitialState);

    const updateMahshavaUser = useCallback(updatedMahshavaUser => {
        setMahshavaUser(currentMahshavaUser => ({ ...currentMahshavaUser, ...updatedMahshavaUser }));
    }, []);

    return { mahshavaUser, updateMahshavaUser };
};

