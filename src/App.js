import React, {Component} from 'react';
// import {Menu} from './components/menu'
import {BrowserRouter, Route} from 'react-router-dom'
import Survey from './components/Survey';
import SurveyResults from './components/ResultsView'
import SurveyList from './components/ResultsList'
import Home from './components/Home'

import * as SurveysActions from './components/surveyaction'
import surveysStore from './components/SurveyStore'
import result from './components/Result'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            surveys: props.surveys
        };
    }

    componentWillMount() {
        surveysStore.on('change', () => {
            this.setState({
                todos: surveysStore.getAllSurveys()
            });
        });
    }

    // updateLocalStorage(results) {
    //     localStorage.setItem('storedSurveys', JSON.stringify(results));
    // }

    createSurvey(PESEL, NIP, phone, email, number1, number2, comment) {
        SurveysActions.createSurvey(PESEL, NIP, phone, email, number1, number2, comment)
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/add-survey" render={props => <Survey submitSurvey={this.createSurvey}/>}/>
                        <Route path="/survey-results"
                               render={props => <SurveyResults result={result}/>}/>
                        <Route path="/survey-list" render={props => <SurveyList surveys={this.state.surveys}/>}/>
                    </div>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;
