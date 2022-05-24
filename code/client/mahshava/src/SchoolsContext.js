import React, {useContext, useEffect, useState} from 'react'
import apiService from "./services/api/api";

const SchoolProcessesContext = React.createContext()
const SchoolIDContext = React.createContext()

export function useSchoolProcesses() {
    return useContext(SchoolProcessesContext)
}

export function useSchoolID() {
    return useContext(SchoolIDContext)
}

export function SchoolProcessesProvider({children}) {
    const [schoolProcesses, setSchoolProcesses] = useState([])

    useEffect(async () => {
        const response = await apiService.processService.getSchoolProcess();
        setSchoolProcesses(response)
    }, []);

    const [currentProcessID, setCurrentProcessID] = useState(1)
    const [currentProcess, setCurrentProcess] = useState()

    useEffect(async () => {
        const response = await apiService.processService.getCurrentProcess(currentProcessID);
        setCurrentProcess(response)
    }, [currentProcessID, setCurrentProcessID]);

    return (
        <SchoolProcessesContext.Provider value={{schoolProcesses, currentProcessID, setCurrentProcessID, currentProcess, setCurrentProcess}}>
            {children}
        </SchoolProcessesContext.Provider>
    )
}
