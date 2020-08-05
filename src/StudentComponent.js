import React, {useState} from "react";
import {Button} from "reactstrap";
import EditStudent from "./EditStudent";
import DeleteStudent from "./DeleteStudent";

const StudentComponent = (props) =>{
    return <tr>
        <td>{props.student.id}</td>
        <td>{props.student.firstName}</td>
        <td>{props.student.lastName}</td>
        <td>{props.student.email}</td>
        <td>{props.student.password}</td>
        <td> edit</td>
    </tr>
}
export default StudentComponent;