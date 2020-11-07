import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import LogIn from "./containers/LogIn";
import Listings from "./containers/Listings";
import Details from "./containers/Details";
import AddListing from "./containers/AddListing";
import DisplayListingsCard from "./containers/DisplayListingsCard";

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
      <Route exact path="/" component={DisplayListingsCard} />
      <Route path="/details/:id" component={Details} />
      <Route path="/login" component={LogIn} />
      <ProtectedRoute path="/add" component={AddListing} />
    </Switch>
  );
};

export default Router;
