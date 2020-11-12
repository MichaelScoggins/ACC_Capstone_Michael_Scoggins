import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import LogIn from "./containers/LogIn";
import AddListing from "./containers/AddListing";
import DisplayUserSearchResults from "./containers/DisplayUserSearchResults";
import DisplayPerfectStrainResults from "./containers/DisplayPerfectStrainResults";
import Home from "./components/Home";

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
      <ProtectedRoute path="/add" component={AddListing} />
    </Switch>
  );
};

export default Router;
