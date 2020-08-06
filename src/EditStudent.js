import React, {useEffect, useState} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import axios from "axios";

const EditStudent = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [close, setClose] = useState(false);
    const handleClose = () => {
        props.handleClose();
    }

     const onChangeFirstNameHandler = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastNameHandler = (e) => {
        setLastName(e.target.value);

    }

    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const onSubmit = () => {


        axios.post("http://localhost:8080/employee/save", {
            id:id,
            email: email,
            firstName: firstName,
            lastName: lastName
        }).then(function (response) {
            console.log(response);
         })
    };


    return (
            <React.Fragment>
            <Modal isOpen={props.modal} toggle={handleClose}   className={className}>
                <ModalHeader toggle={handleClose} >Edit Student </ModalHeader>
                <ModalBody>
                            <FormGroup>
                                <Label for="exampleFirstName">FirstName</Label>
                                <Input type="text" name="firstName" id="exampleFirstName"
                                       placeholder="with a placeholder"  value={firstName?firstName:props.student? props.student.firstName:""} onChange={onChangeFirstNameHandler}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleLastName">LastName</Label>
                                <Input type="text" name="lastName" id="exampleLastName" onChange={onChangeLastNameHandler}
                                       placeholder="with a placeholder" value={lastName?lastName:props.student? props.student.lastName:""}/>

                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" onChange={onChangeEmailHandler}
                                       placeholder="with a placeholder" value={email?email:props.student? props.student.email:""}/>
                            </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSubmit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={handleClose}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );

}
export default EditStudent;
