import { useMahshavaContext } from '../../state/MahshavaContextProvider';
import { useNavigate } from 'react-router';
import { removeFromLocalStorage, STORAGE_MAHSHAVA_AUTH_STATE } from '../../storage/storage';

const useAuth = () => {
    const navigate = useNavigate();
    const { mahshavaAuth } = useMahshavaContext();

    const hasToken = mahshavaAuth?.token;

    const expires = mahshavaAuth?.exp || 0;
    const delta = new Date(expires * 1000) - new Date();
    const isTokenValid = delta > 0;

    const isAuthenticated = hasToken && isTokenValid;

    const logout = () => {
        removeFromLocalStorage(STORAGE_MAHSHAVA_AUTH_STATE);
        navigate('login');
    };

    return { isAuthenticated, logout };
};

export default useAuth;

