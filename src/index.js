import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from "./components/Menu";


var surveysList = [
    {
        PESEL: '81100216357',
        NIP: '1234563218',
        phone: '123456789',
        email: 'aaa@aa.aa',
        number1: 20,
        number2: 200,
        comment: 'comment1'
    },
    {
        PESEL: '81100216357',
        NIP: '1234563218',
        phone: '123456789',
        email: 'bbb@bb.bb',
        number1: 0,
        number2: 100,
        comment: 'comment2'
    },
    {
        PESEL: '81100216357',
        NIP: '1234563218',
        phone: '123456789',
        email: 'ccc@cc.cc',
        number1: 50,
        number2: 150,
        comment: 'comment3'
    }


]
// localStorage.clear()
// localStorage.setItem('storedSurveys', JSON.stringify(surveysList));
var surveys = localStorage.getItem('storedSurveys');


if (surveys) {
    surveysList = JSON.parse(surveys);
}
ReactDOM.render((
        <div>
            <Menu/>
        </div>
    ),
    document.getElementById('root')
);

ReactDOM.render(<App surveys={surveysList}/>, document.getElementById("app"));