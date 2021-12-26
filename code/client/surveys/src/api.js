import Axios from 'axios'

const $axios = Axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

//Example of a cross-cutting concern - client api error-handling
$axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("got error")
        console.error(error)

        throw error;
    });


class SaveSurveyService {
    static getQuarters(firstNum,secondNum) {
        return $axios
            .get('quarters/calc-quarter', {params:{firstNumber:firstNum,secondNumber:secondNum}})
            .then(response => response.data)
    }

    static getSurvey(firstNum,secondNum) {
        return $axios
            .post('surveys/save-survey', {params:{firstNumber:firstNum,secondNumber:secondNum}})
            .then(response => response.data)
    }
}

const service = {
    SaveSurveyService
}

export default service
