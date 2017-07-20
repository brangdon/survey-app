import {EventEmitter} from 'events';

import dispatcher from './dispatcher'

class SurveyStore extends EventEmitter {
    constructor() {
        super();
        this.surveys = JSON.parse(localStorage.getItem('storedSurveys'));

        // console.log('len: ' + localStorage.getItem('storedSurveys'))
        // console.log(localStorage.getItem('storedSurveys'))
    }

    createTask(PESEL, NIP, phone, email, number1, number2, comment) {
        this.surveys.unshift(
            {
                PESEL: PESEL,
                NIP: NIP,
                phone: phone,
                email: email,
                number1: number1,
                number2: number2,
                comment: comment
            }
        );
        this.updateLocalStorage(this.surveys)

        this.emit('change');
    }

    updateLocalStorage(updatedTasks) {
        localStorage.setItem('storedSurveys', JSON.stringify(updatedTasks));
    }

    getAllSurveys() {
        return this.surveys;
    }

    handleActions(action) {
        console.log('Surveys Store received an action', action)
        switch (action.type) {
            case 'CREATE_SURVEY': {
                this.createTask(action.PESEL, action.NIP, action.phone, action.email, action.number1, action.number2, action.comment)
            }
        }
    }
}

const surveysStore = new SurveyStore;
dispatcher.register(surveysStore.handleActions.bind(surveysStore))
window.dispatcher = dispatcher;
export default surveysStore;