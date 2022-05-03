import { useCallback, useState } from 'react';

const mahshavaStateInitialState = {};

export const useStateStateManager = () => {
    const [mahshavaState, setMahshavaState] = useState(mahshavaStateInitialState);

    const updateMahshavaState = useCallback(updatedMahshavaState => {
        setMahshavaState(currentMahshavaState => ({ ...currentMahshavaState, ...updatedMahshavaState }));
    }, []);

    return { mahshavaState, updateMahshavaState };
};
