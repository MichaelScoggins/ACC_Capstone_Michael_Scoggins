import React from "react";
import { Redirect } from "react-router-dom";
// import axios from "axios";
import cookie from "cookie";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  // InputBase,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchBar from "../containers/SearchBar";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
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
    "&:hover": { color: "#FFA726" },
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

  const SignIn = () => {
    return (
      <Link style={{ textDecoration: "none" }} to="/login">
        <Button variant="contained" color="secondary">
          <Typography
            style={{
              color: "#345600",
              fontWeight: 600,
            }}
          >
            Sign In
          </Typography>
        </Button>
      </Link>
    );
  };

  const SignUp = () => {
    return (
      <Link
        to="/signup"
        style={{
          textDecoration: "none",
          fontWeight: "600",
          color: "black",
        }}
      >
        <Button variant="contained" color="secondary">
          <Typography
            style={{
              color: "#345600",
              fontWeight: 600,
            }}
          >
            Sign Up
          </Typography>
        </Button>
      </Link>
    );
  };

  const SignOut = () => {
    return (
      <Button
        variant="contained"
        color="secondary"
        style={{ color: "white" }}
        className="nav-list-item"
        onClick={() => {
          document.cookie = "loggedIn=";
          window.location.replace("/login");
        }}
      >
        <Typography>Sign Out</Typography>
      </Button>
    );
  };

  return (
    <div>
      <AppBar title="Higher Intentions" position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => props.toggleDrawer(!props.drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <SearchBar />
          <Typography variant="h6" style={{ color: "white" }}>
            <Link to="/">
              <FontAwesomeIcon
                edge="start"
                className={classes.menuButton}
                icon={faCannabis}
                aria-label="open drawer"
                style={{ cursor: "pointer", marginRight: 1 }}
                size="2x"
              />
            </Link>
          </Typography>
          <Typography>Higher Intentions</Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}></div>
          <ul className="nav-list">
            {props.user && (
              <Typography color="text-primary">
                <span>
                  Welcome <span style={{ color: "orange" }}>{props.user}</span>!
                </span>
              </Typography>
            )}
            {props.user && <SignOut />}
            {!props.user &&
              location.pathname !== "/login" &&
              location.pathname !== "/signup" && <SignIn />}
            {!props.user && location.pathname === "/login" && <SignUp />}
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
