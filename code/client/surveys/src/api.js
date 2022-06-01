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
    static saveSurvey(survey, color) {
        return $axios.post('surveys/save-survey/', { survey, color }).then(response => response.data);
    }
}

class SurveyListService {
    static getSurveyTitle(id) {
        return $axios.get('surveys/get-survey-title/', {
            params: {id: id}
        }).then(response => response.data);
    }
}

class RenderService {
    static getSurveyJSON(id) {
        console.log("IN API " +id)
        return $axios.get('surveys/get-survey-json/', {
            params: {id: id}
        }).then(response => response.data);
    }
}

class BrandingService {
    static getBackgroundColor(id){
        return $axios.get('survey/get-survey-background-color', {
            params: {id: id}
        }).then(response => response.data);
    }
}




const service = {
    SurveyService,
    SurveyListService,
    RenderService,
    BrandingService,
};

export default service;
