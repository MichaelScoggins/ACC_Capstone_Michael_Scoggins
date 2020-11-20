import React from "react";
// import { Redirect } from "react-router-dom";
// import axios from "axios";
import cookie from "cookie";
import {
  AppBar,
  Toolbar,
  // IconButton,
  Typography,
  Button,
  // InputBase,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AddListing from "../containers/forms/RecordPreLog";
import SearchBar from "../containers/SearchBar";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
// import MenuIcon from "@material-ui/icons/Menu";
// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import MoreIcon from "@material-ui/icons/MoreVert";
// import SearchBy from "../containers/SearchBy";
// import PosEffectsChips from "../containers/PosEffectsChips";
// import NegEffectsChips from "../containers/NegEffectsChips";
// import FlavorChips from "../containers/FlavorChips";
// import MedicinalChips from "../containers/MedicinalChips";
// import SpeciesPrefsChips from "../containers/SpeciesPrefsChips";
// import FindPerfectStrain from "../containers/FindPerfectStrain";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color: "lightgray",
    "&:hover": { color: "springgreen" },
    marginRight: theme.spacing(0),
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
  signUp: {
    backgroundColor: theme.palette.info.main,
  },
}));

const Navigation = (props) => {
  const classes = useStyles();
  const cookies = cookie.parse(document.cookie);
  const location = useLocation();

  const ifNotLoggedIn = () => {
    if (
      !cookies.loggedIn &&
      location.pathname !== "/login" &&
      location.pathname !== "/signup"
    ) {
      return (
        <Button
          id="loginButton"
          variant="contained"
          className="nav-list-item"
          color="secondary"
        >
          <Typography>
            <Link style={{ color: "#345600", fontWeight: 600 }} to="/login">
              Sign In
            </Link>
          </Typography>
        </Button>
      );
    }
  };

  const SignUp = () => {
    if (!cookies.loggedIn && location.pathname === "/login") {
      return (
        <Button variant="contained" color="secondary">
          <Link
            style={{
              textDecoration: "none",
              fontWeight: "600",
              color: "black",
            }}
            to="/signup"
          >
            Sign Up
          </Link>
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
            <Typography>Sign Out</Typography>
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
      <AppBar title="Higher Intentions" position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ color: "white" }}>
            <FontAwesomeIcon
              edge="start"
              className={classes.menuButton}
              icon={faCannabis}
              aria-label="open drawer"
              style={{ cursor: "pointer" }}
              size="2x"
              onClick={() => props.toggleDrawer(!props.drawerOpen)}
            />
          </Typography>
          <SearchBar />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}></div>
          <Typography>
            <div>{addListingButton()}</div>
          </Typography>
          <ul className="nav-list">
            {ifLoggedIn()}
            {ifNotLoggedIn()}
            {SignUp()}
          </ul>
        </Toolbar>
      </AppBar>
      <Typography color="text-primary">
        {cookies.loggedIn && (
          <span>
            Welcome <span style={{ color: "springgreen" }}>{props.user}</span>!
          </span>
        )}
      </Typography>
    </div>
  );
};

export default Navigation;
