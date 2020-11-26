import React from "react";
import { Redirect, Link } from "react-router-dom";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { faBong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/" color="inherit" style={{ cursor: "pointer" }}>
        Higher Intentions
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(./../spaceman.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = (props) => {
  const classes = useStyles();
  const [redirectHome, setRedirectHome] = React.useState(null);

  const handleTextChange = (e) => {
    const newState = props.profile;
    newState[e.target.id] = e.target.value;
    props.setProfile(newState);
  };

  const setProfile = (e) => {
    e.preventDefault();
    const profile = props.profile;
    console.log({ profile });
    // profile.id = uuidv4();
    props.setProfile(profile);
    props.setUser(props.profile.username);
    console.log(props.profile);
    setRedirectHome(true);
    // clearAll();
  };

  if (redirectHome) {
    return <Redirect to="/" />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon
              icon={faBong}
              size="1x"
              style={{ color: "black" }}
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={setProfile}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.firstName}
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              type="text"
              autoComplete="firstName"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.lastName}
              fullWidth
              name="lastName"
              label="Last Name"
              type="text"
              id="lastName"
              autoComplete="current-lastName"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.email}
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="current-email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.username}
              fullWidth
              name="username"
              label="Username"
              type="username"
              id="username"
              autoComplete="current-username"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.password}
              fullWidth
              name="password"
              label="Password"
              type="text"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.city}
              fullWidth
              name="city"
              label="City"
              type="text"
              id="city"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.state}
              fullWidth
              name="state"
              label="State"
              type="text"
              id="state"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  {"Continue As Guest"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUp;
