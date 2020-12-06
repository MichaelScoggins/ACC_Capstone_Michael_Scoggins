import React from "react";
import { Switch, Route } from "react-router";
import LogIn from "./containers/forms/LogIn";
import UserSearchResults from "./containers/UserSearchResults";
import Home from "./containers/Home";
import FavStrainsCards from "./containers/cards/FavStrainsCards";
import SignUp from "./containers/forms/SignUp";
import Experience from "./containers/cards/ExperienceCards";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/search" component={UserSearchResults} />
      <Route path="/favorites" component={FavStrainsCards} />
      <Route path="/experience" component={Experience} />
    </Switch>
  );
};

export default Router;
