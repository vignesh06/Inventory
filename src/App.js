import React, { useState, useEffect } from 'react';
import Admin from './Layout/Admin'
import Login from './Layout/Login'
import ForgotPassword from './Layout/ForgotPassword'
import signup from './Layout/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
 <Router >
      <Switch>
        <Route  path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/signup" component={signup} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
