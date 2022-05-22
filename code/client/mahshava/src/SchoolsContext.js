import React, {useContext, useEffect, useState} from 'react'
import apiService from "./services/api/api";

const SchoolsContext = React.createContext()
const SchoolIDContext = React.createContext()

export function useSchools() {
    return useContext(SchoolsContext)
}

export function useSchoolID() {
    return useContext(SchoolIDContext)
}

export function SchoolsProvider({children}) {
    const [schoolProcesses, setSchoolProcesses] = useState([])
    useEffect(async () => {
        const response = await apiService.processService.getSchoolProcess();
        setSchoolProcesses(response)
    }, []);

    const [schoolID, setSchoolID] = useState(1)


    return (
        <SchoolsContext.Provider value={schoolProcesses}>
            <SchoolIDContext.Provider value={{schoolID, setSchoolID}}>
                {children}
            </SchoolIDContext.Provider>
        </SchoolsContext.Provider>
    )
}
