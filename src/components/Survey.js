import React from 'react'

import {Redirect} from 'react-router'

export class Survey extends React.Component {

    constructor() {
        super();

        this.submitSurvey = this.submitSurvey.bind(this);
        this.handleChangePesel = this.handleChangePesel.bind(this);
        this.handleChangeNip = this.handleChangeNip.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeNumber1 = this.handleChangeNumber1.bind(this);
        this.handleChangeNumber2 = this.handleChangeNumber2.bind(this);

        this.onBlurPesel = this.onBlurPesel.bind(this);
        this.onBlurNip = this.onBlurNip.bind(this);
        this.onBlurPhone = this.onBlurPhone.bind(this);
        this.onBlurEmail = this.onBlurEmail.bind(this);
        this.onBlurText = this.onBlurText.bind(this);
        this.onBlurNumber1 = this.onBlurNumber1.bind(this);
        this.onBlurNumber2 = this.onBlurNumber2.bind(this);

        this.state = {
            redirectToNewPage: false,
            PESEL: '',
            NIP: '',
            phone: '',
            text: '',
            email: '',
            number1: '',
            number2: '',
            validPesel: 0,
            validNip: 0,
            validPhone: 0,
            validEmail: 0,
            validText: 0,
            validNumber1: 0,
            validNumber2: 0
        }
    }

    handleChangePesel(event) {
        this.setState({PESEL: event.target.value});
    }

    handleChangeNip(event) {
        this.setState({NIP: event.target.value});
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangeText(event) {
        this.setState({text: event.target.value});
    }

    handleChangeNumber1(event) {
        this.setState({number1: event.target.value});
        console.log('1: ' + this.state.number1);
    }

    handleChangeNumber2(event) {
        this.setState({number2: event.target.value});
        console.log('2: ' + this.state.number2);
    }

    onBlurPesel() {
        if (this.state.PESEL === '') {
            this.setState({
                validPesel: 0
            });
        } else if (this.validatePesel(this.state.PESEL)) {
            this.setState({
                validPesel: 1
            });
        } else {
            this.setState({
                validPesel: -1
            });
        }
    }

    onBlurNip() {
        console.log('blur nip');
        if (this.state.NIP === '') {
            this.setState({
                validNip: 0
            });
        } else if (this.validateNip(this.state.NIP)) {
            this.setState({
                validNip: 1
            });
        } else {
            this.setState({
                validNip: -1
            });
        }
    }

    onBlurPhone() {

        if (this.state.phone === '') {
            this.setState({
                validPhone: 0
            });
        } else if (this.validatePhone(this.state.phone)) {
            this.setState({
                validPhone: 1
            });
        } else {
            this.setState({
                validPhone: -1
            });
        }
    }

    onBlurEmail() {
        console.log('blur email');
        if (this.state.email === '') {
            this.setState({
                validEmail: 0
            });
        } else if (this.validateEmail(this.state.email)) {
            this.setState({
                validEmail: 1
            });
        } else {
            this.setState({
                validEmail: -1
            });
        }
    }

    onBlurText() {
        console.log('blur text');

        console.log(this.state.text)
        if (this.state.text === '') {
            this.setState({
                validText: 0
            });
        } else if (this.validateText(this.state.text)) {
            this.setState({
                validText: 1
            });
        } else {
            this.setState({
                validText: -1
            });
        }
    }

    onBlurNumber1() {
        console.log('blur number1');
        console.log(this.state.validNumber1)

        if (this.state.number1 === '' ) {
            this.setState({
                validNumber1: 0
            });
        } else if (this.validateNumber1(this.state.number1)) {
            this.setState({
                validNumber1: 1
            });
        } else {
            this.setState({
                validNumber1: -1
            });
        }
    }

    onBlurNumber2() {
        console.log('blur number2');
        if (this.state.number2 === '' ) {
            this.setState({
                validNumber2: 0
            });
        } else if (this.validateNumber2(this.state.number2)) {
            this.setState({
                validNumber2: 1
            });
        } else {
            this.setState({
                validNumber2: -1
            });
        }
    }

    validatePesel(pesel) {
        var reg = /^[0-9]{11}$/;
        if (reg.test(pesel) === false)
            return false;
        else {
            var digits = ("" + pesel).split("");
            if ((parseInt(pesel.substring(4, 6)) > 31) || (parseInt(pesel.substring(2, 4)) > 12))
                return false;

            var checksum = (1 * parseInt(digits[0]) + 3 * parseInt(digits[1]) + 7 * parseInt(digits[2]) + 9 * parseInt(digits[3]) + 1 * parseInt(digits[4]) + 3 * parseInt(digits[5]) + 7 * parseInt(digits[6]) + 9 * parseInt(digits[7]) + 1 * parseInt(digits[8]) + 3 * parseInt(digits[9])) % 10;
            if (checksum == 0) checksum = 10;
            checksum = 10 - checksum;

            return (parseInt(digits[10]) == checksum);
        }
    }

    validateNip(nip) {
        var nipWithoutDashes = nip.replace(/-/g, "");
        var reg = /^[0-9]{10}$/;
        if (reg.test(nipWithoutDashes) == false) {
            return false;
        }
        else {
            var digits = ("" + nipWithoutDashes).split("");
            var checksum = (6 * parseInt(digits[0]) + 5 * parseInt(digits[1]) + 7 * parseInt(digits[2]) + 2 * parseInt(digits[3]) + 3 * parseInt(digits[4]) + 4 * parseInt(digits[5]) + 5 * parseInt(digits[6]) + 6 * parseInt(digits[7]) + 7 * parseInt(digits[8])) % 11;

            return (parseInt(digits[9]) == checksum);
        }
    }

    validatePhone(phone) {

        var numbers = /^[0-9]+$/;
        if (phone.match(numbers) && phone.length == 9) {
            return true;
        }
        else {
            return false;
        }
    }

    validateEmail(email) {

        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            return false;
        } else {
            return true;
        }
    }

    validateText(text) {
        if (text.length > 4 && text.length < 200) {
            return true
        } else {
            return false
        }
    }

    validateNumber1(number1) {
        var numbers = /^[0-9]+$/;
        if (number1.match(numbers) && number1 >= 0 && number1 <= 100) {
            return true;
        }
        else {
            return false;
        }
    }

    validateNumber2(number2) {
        var numbers = /^[0-9]+$/;
        if (number2.match(numbers) && number2 >= 100 && number2 <= 1000) {
            return true;
        }
        else {
            return false;
        }
    }

    submitSurvey() {


        if (!this.state.validPesel > 0) {
            this.setState({
                validPesel: -1
            })
        }

        if (!this.state.validNip > 0) {
            this.setState({
                validNip: -1
            })
        }

        if (!this.state.validPhone > 0) {
            this.setState({
                validPhone: -1
            })
        }

        if (!this.state.validEmail > 0) {
            this.setState({
                validEmail: -1
            })
        }

        if (!this.state.validNumber1 > 0) {
            this.setState({
                validNumber1: -1
            })
        }

        if (!this.state.validNumber2 > 0) {
            this.setState({
                validNumber2: -1
            })
        }

        if (!this.state.validText > 0) {
            this.setState({
                validText: -1
            })
        }

        if (this.state.validPesel > 0 && this.state.validNip > 0 && this.state.validPhone > 0 && this.state.validEmail > 0 && this.state.validNumber1 > 0 && this.state.validNumber2 > 0 && this.state.validText > 0) {

            this.setState(
                {redirectToNewPage: true}
            );
            this.props.submitSurvey(this.state.PESEL, this.state.NIP, this.state.phone, this.state.email, this.state.number1, this.state.number2, this.state.text)
        }
    }

    render() {
        var classesPesel = ['form-control'];
        var peselLabel = '';

        if (this.state.validPesel < 0) {
            classesPesel.push('red');
            peselLabel = <label className="red-label" for="input1">Incorrect PESEL</label>;
        } else if (this.state.validPesel > 0) {
            classesPesel.push('green');
            peselLabel = <label className="green-label" for="input1">Correct PESEL</label>;
        }

        var classesNip = ['form-control'];
        var nipLabel = '';

        if (this.state.validNip < 0) {
            classesNip.push('red');
            nipLabel = <label className="red-label" for="input1">Incorrect NIP</label>;
        } else if (this.state.validNip > 0) {
            classesNip.push('green');
            nipLabel = <label className="green-label" for="input1">Correct NIP</label>;
        }

        var classesPhone = ['form-control'];
        var phoneLabel = '';

        if (this.state.validPhone < 0) {
            classesPhone.push('red');
            phoneLabel = <label className="red-label" for="input1">Incorrect phone number</label>;
        } else if (this.state.validPhone > 0) {
            classesPhone.push('green');
            phoneLabel = <label className="green-label" for="input1">Correct phone number</label>;
        }

        var classesEmail = ['form-control'];
        var emailLabel = '';

        if (this.state.validEmail < 0) {
            classesEmail.push('red');
            emailLabel = <label className="red-label" for="input1">Incorrect email</label>;
        } else if (this.state.validEmail > 0) {
            classesEmail.push('green');
            emailLabel = <label className="green-label" for="input1">Correct email</label>;
        }

        var classesNumber1 = ['form-control'];
        var number1Label = '';

        if (this.state.validNumber1 < 0) {
            classesNumber1.push('red');
            number1Label = <label className="red-label" for="input1">Incorrect number1</label>;
        } else if (this.state.validNumber1 > 0) {
            classesNumber1.push('green');
            number1Label = <label className="green-label" for="input1">Correct number1</label>;
        }

        var classesNumber2 = ['form-control'];
        var number2Label = '';

        if (this.state.validNumber2 < 0) {
            classesNumber2.push('red');
            number2Label = <label className="red-label" for="input1">Incorrect number2</label>;
        } else if (this.state.validNumber2 > 0) {
            classesNumber2.push('green');
            number2Label = <label className="green-label" for="input1">Correct number2</label>;
        }

        var classesText = ['form-control'];
        var textLabel = '';

        if (this.state.validText < 0) {
            classesText.push('red');
            textLabel = <label className="red-label" for="input1">Incorrect comment</label>;
        } else if (this.state.validText > 0) {
            classesText.push('green');
            textLabel = <label className="green-label" for="input1">Correct comment</label>;
        }

        if (this.state.redirectToNewPage) {
            return (
                <Redirect to={'/'}/>
            )
        } else {
        }
        return (
            <div className="survey">
                <div className="survey_header"><h3>Add Survey</h3></div>

                <div className="survey_details">
                    <form >
                        <div className="form-group">
                            <label for="input1">Insert PESEL</label>
                            <input onChange={this.handleChangePesel} onBlur={this.onBlurPesel} type="text" id="input1"
                                   className={classesPesel.join(' ')} placeholder="PESEL code"/>
                            {
                                peselLabel
                            }
                        </div>
                        <div className="form-group">
                            <label for="input2">Insert NIP</label>
                            <input onChange={this.handleChangeNip} onBlur={this.onBlurNip} type="text" id="input1"
                                   className={classesNip.join(' ')} placeholder="NIP code"/>
                            {
                                nipLabel
                            }
                        </div>
                        <div className="form-group">
                            <label for="input3">Insert phone number</label>
                            <input onChange={this.handleChangePhone} onBlur={this.onBlurPhone} type="text" id="input1"
                                   className={classesPhone.join(' ')} placeholder="Phone number"/>
                            {
                                phoneLabel
                            }
                        </div>
                        <div className="form-group">
                            <label for="input3">Insert email</label>
                            <input onChange={this.handleChangeEmail} onBlur={this.onBlurEmail} type="text" id="input1"
                                   className={classesEmail.join(' ')} placeholder="Email"/>
                            {
                                emailLabel
                            }
                        </div>
                        <div className="form-group">
                            <label for="input3">Insert number1</label>
                            <input onChange={this.handleChangeNumber1} onBlur={this.onBlurNumber1} type="text"
                                   id="input1" className={classesNumber1.join(' ')}
                                   placeholder="Integer number1 value from 0 to 100"/>
                            {
                                number1Label
                            }
                        </div>
                        <div className="form-group">
                            <label for="input3">Insert number2</label>
                            <input onChange={this.handleChangeNumber2} onBlur={this.onBlurNumber2} type="text"
                                   id="input1" className={classesNumber2.join(' ')}
                                   placeholder="Integer number2 value form 100 to 1000"/>
                            {
                                number2Label
                            }
                        </div>
                        <div className="form-group">
                            <label for="input4">Enter own comment</label>
                            <textarea onChange={this.handleChangeText} onBlur={this.onBlurText} id="input4"
                                      className={classesText.join(' ')} placeholder="Type at lest 5 chars"/>
                            {
                                textLabel
                            }
                        </div>

                        <button type="button" onClick={this.submitSurvey} className="btn btn-default pull-right">
                            Submit
                        </button>
                    </form>
                </div>
                <div>

                </div>

            </div>
        );

    }
}

export default Survey;