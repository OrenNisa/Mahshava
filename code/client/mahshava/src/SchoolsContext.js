import React, {useContext, useEffect, useState} from 'react'
import apiService from "./services/api/api";

const SchoolProcessesContext = React.createContext()
const SurveyResultsContext = React.createContext()

export function useSchoolProcesses() {
    return useContext(SchoolProcessesContext)
}
export function useSurveyResults() {
    return useContext(SurveyResultsContext)
}

export function SchoolProcessesProvider({children}) {
    const [schoolProcesses, setSchoolProcesses] = useState(apiService.processService.getSchoolProcess)
    const [currentProcessID, setCurrentProcessID] = useState(1)
    const [currentProcess, setCurrentProcess] = useState(null)
    const [surveyResults, setSurveyResults] = useState(null)
    const [surveyResultsData, setSurveyResultsData] = useState(null)
    const [curNumbersForReport, setCurNumbersForReport] = useState(null)
    const [allFixedSurveysData, setAllFixedSurveysData] = useState([])

    const numbersForReport = (result) => {
        let averages = [0,0,0];
        averages[0] = result.leadershipAndOrganizationalCultureSurvey.values.reduce((a, b) => a + b, 0) / result.leadershipAndOrganizationalCultureSurvey.values.length;
        averages[1] = result.relationshipNetworksSurvey.values.reduce((a, b) => a + b, 0) / result.relationshipNetworksSurvey.values.length;
        averages[2] = result.willingnessToChangeSurvey.values.reduce((a, b) => a + b, 0) / result.willingnessToChangeSurvey.values.length;
        let temp = [...averages];
        let idOfAverages = {
            idOfMaxAverage: {},
            idOfSecondAverage: {},
            idOfThirdAverage: {}
        }
        idOfAverages.idOfMaxAverage = temp.indexOf(Math.max(...temp));
        temp[idOfAverages.idOfMaxAverage] = -1;
        idOfAverages.idOfSecondAverage = temp.indexOf(Math.max(...temp));
        temp[idOfAverages.idOfSecondAverage] = -1;
        idOfAverages.idOfThirdAverage = temp.indexOf(Math.max(...temp))

        return {
            allAverages: averages,
            idOfAverages: idOfAverages
        }
    }

    useEffect(() => {
        setSchoolProcesses(apiService.processService.getSchoolProcess);
        // setCurrentProcess(apiService.processService.getCurrentProcess(1))
        // (async () => {
        //     const response = await apiService.processService.getCurrentProcess(1);
        //     setCurrentProcess(response)
        // })();
    }, []);

    useEffect( () => {
        (async () => {
            const response = await apiService.processService.getCurrentProcess(currentProcessID);
            setCurrentProcess(response)
        })();
    }, [currentProcessID]);

    useEffect(() => {
        if(!currentProcess) return;
        setSurveyResults(currentProcess.schoolID.surveysRes)
    }, [currentProcess]);

    useEffect(() => {
        if(!surveyResults) return;
        setSurveyResultsData(
            {
                leadershipAndOrganizationalCultureSurvey: {
                    name: "מנהיגות ותרבות ארגונית",
                    names: ['מודעות למצב', 'מעורבות הצוות', 'לכידות הצוות', 'חדשנות ויצירתיות', 'קבלת ההחלטות'],
                    keys: Object.entries(surveyResults.leadershipAndOrganizationalCultureSurvey).slice(1).map(entry => entry[0]),
                    values: Object.entries(surveyResults.leadershipAndOrganizationalCultureSurvey).slice(1).map(entry => entry[1])
                },
                relationshipNetworksSurvey: {
                    name: "רשתות של מערכות יחסים",
                    names: ['שותפויות יעילות', 'רב מקצועיות', 'מינוף הידע', 'משאבים פנימיים'],
                    keys: Object.entries(surveyResults.relationshipNetworksSurvey).slice(1).map(entry => entry[0]),
                    values: Object.entries(surveyResults.relationshipNetworksSurvey).slice(1).map(entry => entry[1])
                },
                willingnessToChangeSurvey: {
                    name: "מוכנות להשתנות",
                    names: ['עמדה פרואקטיבית', 'בהירות מטרה ', 'בדיקת תוכניות', 'אסטרטגיית תכנון'],
                    keys: Object.entries(surveyResults.willingnessToChangeSurvey).slice(1).map(entry => entry[0]),
                    values: Object.entries(surveyResults.willingnessToChangeSurvey).slice(1).map(entry => entry[1])
                }
            }
        )
    }, [surveyResults]);

    useEffect(() => {
        if(!surveyResultsData) return;
        setCurNumbersForReport(numbersForReport(surveyResultsData))
        setAllFixedSurveysData([
            {
                labels: surveyResultsData.leadershipAndOrganizationalCultureSurvey.names,
                datasets: [
                    {
                        label: "ממוצע ההצבעות",
                        data: surveyResultsData.leadershipAndOrganizationalCultureSurvey.values,
                        backgroundColor: [
                            "#E78536"
                        ],
                    }
                ]
            },
            {
                labels: surveyResultsData.relationshipNetworksSurvey.names,
                datasets: [
                    {
                        label: "ממוצע ההצבעות",
                        data: surveyResultsData.relationshipNetworksSurvey.values,
                        backgroundColor: [
                            "#AFCEC2"
                        ],
                    }
                ]
            },
            {
                labels: surveyResultsData.willingnessToChangeSurvey.names,
                datasets: [
                    {
                        label: "ממוצע ההצבעות",
                        data: surveyResultsData.willingnessToChangeSurvey.values,
                        backgroundColor: [
                            "#6377C0"
                        ],
                    }
                ]
            }
        ])
    }, [surveyResultsData]);


    return (
        <SchoolProcessesContext.Provider value={{schoolProcesses, currentProcessID, setCurrentProcessID, currentProcess}}>
            <SurveyResultsContext.Provider value={{surveyResultsData, curNumbersForReport, allFixedSurveysData}}>
            {children}
            </SurveyResultsContext.Provider>
        </SchoolProcessesContext.Provider>
    )
}