import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import RegistrationForm from "./RegistrationForm";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import history from './history'
import SearchForm from './SearchForm'
import EditStudent from "./EditStudent";
import DeleteStudent from "./DeleteStudent";


class App extends React.Component {
    render() {
        return (
         <React.Fragment>
            <NavBar/>
             <Router history={history}>
                 <Switch>
                     <Route
                         exact
                         path="/home">
                         <Home/>
                     </Route>
                     <Route
                         exact
                         path="/signup">
                         <RegistrationForm/>
                     </Route>
                     <Route
                         exact
                         path="/login">
                         <Login modal={true} />
                     </Route>
                     <Route
                         exact
                         path="/admin">
                         <SearchForm />
                     </Route>
                     <Route
                         exact
                         path="*">
                         <Home/>
                     </Route>
                 </Switch>
             </Router>
         </React.Fragment>
        );

    };
}

export default App;
