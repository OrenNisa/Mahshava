import Axios from 'axios';

const $axios = Axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

//Example of a cross-cutting concern - client api error-handling
$axios.interceptors.response.use(
    response => response,
    error => {
        console.error('got error');
        console.error(error);

        throw error;
    }
);

class SurveyService {
    static saveSurvey(survey) {
        return $axios.post('surveys/save-survey/', { survey }).then(response => response.data);
    }
}

const service = {
    SurveyService,
};

export default service;
