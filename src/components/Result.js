import {EventEmitter} from 'events';

class Result {
    constructor() {
        this.surveys = JSON.parse(localStorage.getItem('storedSurveys'));
    }

    getNumber1Mean() {
        let result = 0;

        for (let i = 0; i < this.surveys.length; i++) {
            result += parseInt(this.surveys[i].number1)
        }

        if (this.surveys.length > 0) {

            return (result / this.surveys.length).toFixed(2)
        } else {
            return result
        }
    }

    getNumber2Mean() {
        let result = 0;

        for (let i = 0; i < this.surveys.length; i++) {
            result += parseInt(this.surveys[i].number2)
        }

        if (this.surveys.length > 0) {

            return (result / this.surveys.length).toFixed(2)
        } else {
            return result
        }
    }

    getSurveysNumber() {
        return this.surveys.length
    }


}

const result = new Result;
export default result;