import React, {Component} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import axios from 'axios';

export default class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            formError: false,
            emailError: '',
            passwordError: '',
            firstNameError: '',
            lastNameError: '',
            formErrorArray: [],
            success: ''
        }
    }

    onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => {
            this.isValid()
        })
    };

    onSubmit = () => {
        var $this = this;
        const {email, password, firstName, lastName} = this.state;
        if (this.isValid()) {
            axios.post("http://localhost:8080/employee/save", {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            }).then(function (response) {
                console.log(response);
                $this.setState({success: 'saved successfully'})
            })
        }

    };

    isValid = () => {
        let {firstName, lastName, password, email, emailError, passwordError, firstNameError, lastNameError} = this.state;
        let formErrorArray = [];
        const validEmailRegex =
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        if (lastName === undefined || lastName === null) {
            lastNameError = "Last Name is required field";
            formErrorArray.push(lastNameError);

        } else if (lastName.length < 4) {
            lastNameError = "Last Name is invalid.Please try with Name greater than 3 characters";
            formErrorArray.push(lastNameError);

        } else
            lastNameError = "";

        if (firstName === undefined || firstName === null) {
            firstNameError = "First Name is required field";
            formErrorArray.push(firstNameError);

        } else if (firstName.length < 4) {
            firstNameError = "First Name is invalid.Please try with Name greater than 3 characters";
            formErrorArray.push(firstNameError);

        } else
            firstNameError = "";

        if (validEmailRegex.test(email)) {
            emailError = "";
        } else {
            emailError = "Email Id is invalid.Please try with valid email id";
            formErrorArray.push(emailError);

        }

        if (password.length < 5) {
            passwordError = "Please enter Strong password. At least 6 char should be there";
            formErrorArray.push(passwordError);

        } else {
            passwordError = "";
        }
        this.setState({firstNameError, lastNameError, passwordError, emailError});
        console.log(formErrorArray);
        if (formErrorArray.length < 1) {
            return true;
        } else
            return false;
    };

    render() {
        return (
            <React.Fragment>
                <h2 id={"heading"}>Student Registration Form</h2>
                <Form>
                    {
                        this.state.success &&
                        <Label className={"text-red"}>{this.state.success}</Label>
                    }

                    <FormGroup>
                        <Label for="exampleFirstName">FirstName</Label>
                        <Input type="text" name="firstName" id="exampleFirstName" onChange={this.onChangeHandler}
                               placeholder="with a placeholder"/>
                        {
                            this.state.firstNameError &&
                            <Label className={"text-red"}>{this.state.firstNameError}</Label>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleLastName">LastName</Label>
                        <Input type="text" name="lastName" id="exampleLastName" onChange={this.onChangeHandler}
                               placeholder="with a placeholder"/>
                        {
                            this.state.lastNameError &&
                            <Label className={"text-red"}>{this.state.lastNameError}</Label>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" onChange={this.onChangeHandler}
                               placeholder="with a placeholder"/>
                        {
                            this.state.emailError &&
                            <Label className={"text-red"}>{this.state.emailError}</Label>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" onChange={this.onChangeHandler}
                               placeholder="password placeholder"/>
                        {
                            this.state.passwordError &&
                            <Label className={"text-red"}>{this.state.passwordError}</Label>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={this.onSubmit}>Submit</Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}