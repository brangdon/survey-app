import dispatcher from './dispatcher'

export function createSurvey(PESEL, NIP, phone, email, number1, number2, comment) {
    dispatcher.dispatch({
        type: 'CREATE_SURVEY',
        PESEL: PESEL,
        NIP: NIP,
        phone: phone,
        email: email,
        number1: number1,
        number2: number2,
        comment: comment
    });
}