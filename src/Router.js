import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import LogIn from "./containers/LogIn";
import RecordPreLog from "./containers/RecordPreLog";
import DisplayUserSearchResults from "./containers/DisplayUserSearchResults";
// import DisplayPerfectStrainResults from "./containers/DisplayPerfectStrainResults";
import Home from "./containers/Home";
import FormTemplate from "./components/FormTemplate";
import DisplayAlbum from "./containers/DisplayAlbum";

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
      <Route path="/perfectstrain" component={DisplayAlbum} />
      <Route path="/login" component={LogIn} />
      <Route path="/form" component={FormTemplate} />
      <ProtectedRoute path="/add/pre" component={RecordPreLog} />
    </Switch>
  );
};

export default Router;
