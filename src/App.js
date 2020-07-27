import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";

class App extends React.Component {
    render() {
        return (
         <React.Fragment>
            <NavBar/>
            <Login/>
         </React.Fragment>
        );

    };
}

export default App;
