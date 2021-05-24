import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";


import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

// function to guard the component for private access
const authGuard = (Component) => () => {  
  return sessionStorage.getItem("token") ? (<Component />) : (<Redirect to="/login" />);
};

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register /> 
      </Route>
      <Route path="/home" render={authGuard(Home)}>
        <Home />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default Routes;