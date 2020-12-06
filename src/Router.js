import React from "react";
import { Switch, Route } from "react-router";
// import cookie from "cookie";
import LogIn from "./containers/forms/LogIn";
// import RecordPreLog from "./containers/forms/RecordPreLog";
import UserSearchResults from "./containers/UserSearchResults";
// import PerfectStrainCards from "./containers/cards/PerfectStrainCards";
import Home from "./containers/Home";
import FavStrainsCards from "./containers/cards/FavStrainsCards";
import SignUp from "./containers/forms/SignUp";
import Experience from "./containers/cards/ExperienceCards";

// const checkAuth = (props) => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies["loggedIn"] ? true : false;
//   // return cookies["token"] === props.token ? true : false;
// };

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

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
