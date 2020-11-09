import React from "react";
import axios from "axios";
import cookie from "cookie";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  InputBase,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import AddListing from "../containers/AddListing";
import { useLocation } from "react-router-dom";

import { fade, makeStyles } from "@material-ui/core/styles";
// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import MoreIcon from "@material-ui/icons/MoreVert";
import SearchBar from "../containers/SearchBar";
import SearchBy from "../containers/SearchBy";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Navigation = (props) => {
  const classes = useStyles();
  const cookies = cookie.parse(document.cookie);
  const location = useLocation();

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
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ color: "white" }}>
            <Link id="navHeader" to="/">
              Higher Intentions
            </Link>
          </Typography>
          <SearchBy />
          <SearchBar />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}></div>
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
        {cookies.loggedIn && (
          <span>
            Welcome <span style={{ color: "green" }}>{props.user}</span>!
          </span>
        )}
      </Typography>
    </div>
  );
};

export default Navigation;
