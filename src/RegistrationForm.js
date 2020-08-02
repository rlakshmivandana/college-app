import React, {Component} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import axios from 'axios';

export default class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formError: false,
            emailError: '',
            passwordError: '',
            firstNameError: '',
            lastNameError: '',
            formErrorArray:[],
            success:''
        }
    }

    onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => this.validateForm(name, value))
    };

    onSubmit = () => {
        var $this =this;
        const {email, password, firstName, lastName, formError,success,formErrorArray} = this.state;
        var validation = {email:this.state.email,password:this.state.password,firstName:this.state.firstName,lastName:this.state.lastName};
        var i;
        for (i in validation) {
            this.validateForm(i,validation[i]);
        }


        console.log(this.state.emailError, this.state.passwordError, this.state.firstNameError, this.state.lastNameError);
        if (!formErrorArray) {
            axios.post("http://localhost:8080/employee/save", {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            }).then(function (response) {
                console.log(response);
                $this.setState({success:'saved successfully'})
            })
        }

    };
    isValidForm = () => {

        const {emailError, passwordError, firstNameError, lastNameError,formErrorArray} = this.state;

        //     if (emailError || passwordError || firstNameError || lastNameError) {
          if (formErrorArray) {
              this.setState({formError: true})
           } else
               this.setState({formError: false})
        alert(this.state.formError);

    };
    validateForm = (name, value) => {
        let {emailError, passwordError, firstNameError, lastNameError, formErrorArray} = this.state;
        const validEmailRegex =
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch (name) {
            case 'lastName':
                if (value === undefined || value === null ) {
                   lastNameError = "Last Name is required field";
                }else if(value.length < 4){
                    lastNameError = "Last Name is invalid.Please try with Name greater than 3 characters";
                }else
                    lastNameError = "";
              //  this.setState({lastNameError: lastNameError});
                 formErrorArray.push(lastNameError)
                break;
            case 'firstName':
                if (value === undefined || value === null ) {
                    firstNameError = "First Name is required field";
                }else if(value.length < 4){
                    firstNameError = "First Name is invalid.Please try with Name greater than 3 characters";
                }else
                    firstNameError = "";
               // this.setState({firstNameError: firstNameError});
                formErrorArray.push(firstNameError)

                break;
            case 'email':
                if (validEmailRegex.test(value)) {
                    emailError = "";
                } else {
                    emailError = "Email Id is invalid.Please try with valid email id";
                }
               // this.setState({emailError: emailError});
                formErrorArray.push(emailError)

                break;
            case 'password':
                if (value.length < 5) {
                    passwordError = "Please enter Strong password. At least 6 char should be there";
                } else {
                    passwordError = "";
                }
              //  this.setState({passwordError: passwordError});
                formErrorArray.push(passwordError);
                break;
        }

      //  this.isValidForm();
        this.setState({formErrorArray:formErrorArray});
       /* this.setState({
            emailError: emailError,
            passwordError: passwordError,
            firstNameError: firstNameError,
            lastNameError: lastNameError
        }, () => this.isValidForm())*/

    }

    render() {
        return (
            <React.Fragment>
                <h2 id={"heading"}>Student Registration Form</h2>
                <Form>

                    {
                        this.state.formErrorArray &&
                        this.state.formErrorArray.map(error => (
                            <div className={"text-red"}>{error}</div>
                            ))
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