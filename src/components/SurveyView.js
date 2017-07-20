import React from 'react'


export class SurveyView extends React.Component {

    constructor(props) {
        super();
        this.state = {
            PESEL: props.survey.PESEL,
            NIP: props.survey.NIP,
            phone: props.survey.phone,
            email: props.survey.email,
            number1: props.survey.number1,
            number2: props.survey.number2,
            comment: props.survey.comment,
            visible: false
        }
    }

    onClick() {
        this.setState({visible: !this.state.visible});
    }

    render() {
        return (
            <div className="survey_view">

                <div onClick={() => this.onClick()} className="survey_view_header">
                    <h4>Header:</h4>
                    <p>Number1: {
                        this.state.number1
                    }
                    </p>
                    <p>Number2: {
                        this.state.number2
                    }
                    </p>
                </div>
                {
                    this.state.visible ?
                        <div className="survey_view_details">
                            <h4>Details:</h4>
                            <p>PESEL: {this.state.PESEL}</p>
                            <p>NIP: {this.state.NIP}</p>
                            <p>phone: {this.state.phone}</p>
                            <p>email: {this.state.email}</p>
                            <p>comment: {this.state.comment}</p>
                        </div> :
                        <div></div>
                }

            </div>


        )
    }
}

export default SurveyView;