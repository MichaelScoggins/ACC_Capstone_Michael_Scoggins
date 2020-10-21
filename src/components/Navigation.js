import React from "react";
import cookie from "cookie";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import AddListing from "../containers/AddListing";
import { useLocation } from "react-router-dom";

const Navigation = (props) => {
  const cookies = cookie.parse(document.cookie);
  const location = useLocation();
  console.log(location.pathname);

  const ifNotLoggedIn = () => {
    if (!cookies.loggedIn && location.pathname !== "/login") {
      return (
        <Button id="loginButton" variant="text" className="nav-list-item">
          <Link to="/login">Log In</Link>
        </Button>
      );
    }
  };

  const ifLoggedIn = () => {
    if (cookies.loggedIn) {
      return (
        <>
          <Button
            variant="text"
            style={{ color: "white" }}
            className="nav-list-item"
            onClick={() => {
              document.cookie = "loggedIn=";
              window.location.replace("/login");
            }}
          >
            Log Out
          </Button>
        </>
      );
    }
  };

  const addListingButton = () => {
    if (cookies.loggedIn) {
      return <AddListing />;
    }
  };

  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1", color: "white" }}>
            <Link id="navHeader" to="/">
              Sandwich Maps
            </Link>
          </Typography>
          <Typography>
            <div>{addListingButton()}</div>
          </Typography>
          <ul className="nav-list">
            {ifLoggedIn()}
            {ifNotLoggedIn()}
          </ul>
        </Toolbar>
      </AppBar>
      <Typography color="text-primary">
        {cookies.loggedIn ? (
          <span>
            Welcome <span style={{ color: "green" }}>{cookies.user}</span>!
          </span>
        ) : null}
      </Typography>
    </div>
  );
};

export default Navigation;
