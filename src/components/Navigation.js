import React from "react";
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

// && props.match.path !== "/login"

const Navigation = () => {
  const ifNotLoggedIn = () => {
    if (document.cookie !== "loggedIn=true") {
      return (
        <Button id="loginButton" variant="text" className="nav-list-item">
          <Link to="/login">Log In</Link>
        </Button>
      );
    }
  };

  const ifLoggedIn = () => {
    if (document.cookie === "loggedIn=true") {
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
    if (document.cookie === "loggedIn=true") {
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
      <Typography color="secondary">
        {document.cookie === "loggedIn=true" ? <span>Welcome user!</span> : ""}
      </Typography>
    </div>
  );
};

export default Navigation;

// <li className="nav-list-item">
// <Link to="/">Austin Small Businesses</Link>
// </li>
