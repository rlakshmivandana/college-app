import React, {useState} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const EditStudent = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(props.modal);

    const toggle = () => setModal(!modal);

    const onChangeHandler = () => {

    }

    const onSubmit = () => {

    }

    return (
            <React.Fragment>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Edit Student </ModalHeader>
                <ModalBody>
                            <FormGroup>
                                <Label for="exampleFirstName">FirstName</Label>
                                <Input type="text" name="firstName" id="exampleFirstName" onChange={onChangeHandler}
                                       placeholder="with a placeholder"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleLastName">LastName</Label>
                                <Input type="text" name="lastName" id="exampleLastName" onChange={onChangeHandler}
                                       placeholder="with a placeholder"/>
                            </FormGroup>

                            <FormGroup>
                                <Button onClick={onSubmit}>Submit</Button>
                            </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Login</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );

}
export default EditStudent;