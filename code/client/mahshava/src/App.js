import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import PrivateRoute from './services/routing/PrivateRoute';
import BaseLayout from './layouts/BaseLayout';
import { useMahshavaContext } from './services/state/MahshavaContextProvider';
import apiService from './services/api/api';
import './App.css';
import useAuth from './services/auth/hooks/useAuth';
import {SchoolProcessesProvider} from "./SchoolsContext";

const App = () => {
    const { updateMahshavaUser } = useMahshavaContext();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            apiService.UserService.getCurrentUser().then(user => updateMahshavaUser({ ...user }));
        }
    }, [isAuthenticated, updateMahshavaUser]);

    return (
        <SchoolProcessesProvider>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="*" exact element={
                        <PrivateRoute>
                            <BaseLayout />
                        </PrivateRoute>
                    }
                    />
                </Routes>
            </div>
        </SchoolProcessesProvider>
    );
};

export default App;
