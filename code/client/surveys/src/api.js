import Axios from 'axios';

const $axios = Axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example of a cross-cutting concern - client api error-handling
$axios.interceptors.response.use(
    response => response,
    error => {
        console.error('got error');
        console.error(error);

        throw error;
    }
);

class SurveyService {

    static saveSurvey(survey, color) {
        return $axios.post('surveys/save-survey/', { survey, color }).then(response => response.data);
    }

    static saveSurveyResults(survey, title) {
        return $axios.post('surveys/save-survey-results/', { survey, title }).then(response => response.data);
    }

    static getAllSurveys(id) {
        return $axios.get('surveys/get-all-surveys/', {
            params: {id: id}
        }).then(response => response.data);
    }

    static getSurveyJSON(id) {
        return $axios.get('surveys/get-survey-json/', {
            params: {id: id}
        }).then(response => response.data);
    }
}

class BrandingService {
    static getBackgroundColor(id){
        return $axios.get('surveys/get-survey-background-color/', {
            params: {id: id}
        }).then(response => response.data);
    }
}




const service = {
    SurveyService,
    BrandingService,
};

export default service;
