import React, {useState} from "react";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, ModalBody, Table} from "reactstrap";
import EditStudent from "./EditStudent";
import DeleteStudent from "./DeleteStudent";
import StudentComponent from "./StudentComponent";

const SearchForm  = (props) => {
    const[students, setStudents] = useState([]);
    const[id, setId] = useState("");

    const[modal, setModal] = useState("true");

   const onSubmit = (e,id) => {
        axios.get('http://localhost:8080/employee/get/'+id)
            .then(
                (response) => {
                    alert(response.data.data.firstName)
                    setStudents(response.data.data);
                }
            )
    }
   /* const onSubmit = (e,id) => {

        axios.get('http://localhost:8080/employee/get/all')
            .then(
                (response) => {
                    alert(response.data.data.firstName)
                    setStudents(response.data.data);
                }
            )
    }*/

    const students1 =  students.map(student => {
        return <tr>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.email}</td>
            <td>{student.password}</td>
            <td> <Button onClick={e =>EditStudent(e,student,{modal})} ><a></a></Button> <Button onClick={e => DeleteStudent(e,student)} >Delete</Button></td>
        </tr>
    });

  /*  const students1 =  students.map(student => {
        return <StudentComponent student={student}/>
    });*/

    return (

        <React.Fragment>
            <div>
                <FormGroup>
                    <Label for="exampleId">StudentId</Label>
                    <Input type="id" name={"id"} id="exampleId"
                           placeholder="with a placeholder"/>
                </FormGroup>
                <FormGroup>
                    <Button onClick={e => onSubmit(e,"1")} >Submit</Button>
                </FormGroup>
            </div>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {students1}
                </tbody>
            </Table>
        </React.Fragment>

    );
}
export default SearchForm;
