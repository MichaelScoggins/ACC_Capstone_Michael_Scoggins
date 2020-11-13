import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import LogIn from "./containers/LogIn";
import RecordPreLog from "./containers/RecordPreLog";
import DisplayUserSearchResults from "./containers/DisplayUserSearchResults";
import DisplayPerfectStrainResults from "./containers/DisplayPerfectStrainResults";
import Home from "./containers/Home";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={DisplayUserSearchResults} />
      <Route path="/perfectstrain" component={DisplayPerfectStrainResults} />
      <Route path="/login" component={LogIn} />
      <ProtectedRoute path="/add" component={RecordPreLog} />
    </Switch>
  );
};

export default Router;
