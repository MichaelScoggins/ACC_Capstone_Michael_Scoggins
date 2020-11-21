import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import LogIn from "./containers/LogIn";
import RecordPreLog from "./containers/forms/RecordPreLog";
import UserSearchResults from "./containers/UserSearchResults";
import PerfectStrainCards from "./containers/PerfectStrainCards";
import Home from "./containers/Home";
import FavStrainsCards from "./containers/FavStrainsCards";
import SignUp from "./containers/forms/SignUp";
import Experience from "./containers/Experience";

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
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/search" component={UserSearchResults} />
      <Route path="/perfectstrain" component={PerfectStrainCards} />
      <Route path="/favorites" component={FavStrainsCards} />
      <Route path="/experience" component={Experience} />
      <ProtectedRoute path="/add/pre" component={RecordPreLog} />
    </Switch>
  );
};

export default Router;
