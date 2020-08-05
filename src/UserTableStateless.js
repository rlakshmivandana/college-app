import React, {useEffect, useState} from 'react';
import {Button, Table} from 'reactstrap';
import axios from 'axios';


const UserTableStateless = (props) => {
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/user/getAll")
           .then(
                (response) => {
                    setUsers(response.data.data);
                }
            )
    }, [])


    const users1 =  users.map(user => {
        return <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td><Button className="btn btn-danger" onClick={() => {
                axios.delete("http://localhost:8080/api/v1/user/delete/" + user.id).then(function (response) {
                    alert(response.data.message);
                })
            }
            }>Delete</Button></td>
        </tr>
    });

        return (

            <React.Fragment>
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
                    {users1}
                    </tbody>
                </Table>
            </React.Fragment>

        );
}
    export default UserTableStateless;