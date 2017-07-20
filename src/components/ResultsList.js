import React from 'react'
import {SurveyView} from  './SurveyView'

export class SurveyList extends React.Component {

    render() {
        var items = this.props.surveys.map((elem, i) => {
            console.log(elem)
            return <SurveyView survey={elem} key={i}/>
        });
        return (
            <div className="survey">
                <div className="surveys_list_header">
                    <h3>Survey List</h3>
                </div>
                <div className="surveys_list_details">
                    {items}
                </div>
            </div>

        );
    }
}

export default SurveyList;