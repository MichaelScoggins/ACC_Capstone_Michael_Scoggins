import React, { Component } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container, Box } from "@material-ui/core";

class App extends Component {
  state = {
    username: "",
    password: "",
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000";
    window.location.replace("/");
  };

  render() {
    return (
      <div className="App">
        <Box
          maxWidth="lg"
          component="span"
          m={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <br />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <br />
            <br />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        </Box>
      </div>
    );
  }
}

export default App;
