import React from "react";
import { Link, useLocation } from "react-router-dom";
// import cookie from "cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchBar from "../../containers/navigation/SearchBar";

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
  // const cookies = cookie.parse(document.cookie);
  const location = useLocation();

  const SignIn = () => {
    return (
      <Link style={{ textDecoration: "none" }} to="/login">
        <Button variant="contained" color="secondary">
          <Typography
            style={{
              fontWeight: 600,
              color: "green",
              textShadow: "1px 1px yellowgreen",
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
              fontWeight: 600,
              color: "green",
              textShadow: "1px 1px yellowgreen",
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
        style={{
          fontWeight: 600,
          color: "green",
          textShadow: "1px 1px yellowgreen",
        }}
        className="nav-list-item"
        onClick={() => {
          document.cookie = "loggedIn=";
          document.cookie = "token=";
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
          <Typography style={{ fontWeight: 500, color: "#FFA726" }}>
            {location.pathname === "/experience"
              ? `Experience Archives`
              : location.pathname === "/search"
              ? `Search All Strains`
              : location.pathname === "/favorites"
              ? `Favorite Strains`
              : `Higher Intentions`}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}></div>
          <ul className="nav-list">
            {props.user && (
              <Typography>
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
