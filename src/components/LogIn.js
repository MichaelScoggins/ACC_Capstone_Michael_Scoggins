import React, { Component } from "react";
import { TextField, Button, Box, Container } from "@material-ui/core";

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
    this.props.setUser(this.state.username);
    document.cookie = `user=${this.state.username};max-age=60*1000`;
    console.log(document.cookie.slice(20));
  };

  render() {
    return (
      <Container>
        <Box maxWidth="lg">
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
      </Container>
    );
  }
}

export default App;
