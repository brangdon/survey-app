import React from 'react'
import SurveyResult from './SurveyView'

export class SurveyResults extends React.Component {

    render() {
        return (
            <div className="results">
                <div className="results_header">
                    <h3>Survey results</h3>
                </div>
                <div className="results_details">
                    <p>Number of surveys: {this.props.result.getSurveysNumber()}</p>
                    <p>Number1 mean: {this.props.result.getNumber1Mean()}</p>
                    <p>Number2 mean: {this.props.result.getNumber2Mean()}</p>
                </div>
            </div>

        );
    }
}

export default SurveyResults;