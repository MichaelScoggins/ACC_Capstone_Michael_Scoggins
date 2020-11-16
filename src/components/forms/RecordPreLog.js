import React, { Component, Fragment } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

class RecordPreLog extends Component {
  state = {
    open: false,
    mood: "",
    worries: "",
    goals: "",
    alreadyAccomplished: "",
    planToAccomplish: "",
    describeAppearance: "",
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const business = { ...this.state };
    business.id = uuidv4();
    delete business.open;
    this.props.addListing(business);
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        mood: "",
        worries: "",
        goals: "",
        alreadyAccomplished: "",
        planToAccomplish: "",
        describeAppearance: "",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <Button
            color="primary"
            variant="contained"
            className="add-listing"
            onClick={this.toggleDialog}
          >
            <Typography>Record Experience</Typography>
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Before You Toke</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-label">
                    Mood
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.mood}
                    onChange={this.handleTextChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"positive"}>Positive</MenuItem>
                    <MenuItem value={"neutral"}>Neutral</MenuItem>
                    <MenuItem value={"anxious"}>Anxious</MenuItem>
                  </Select>
                  <FormHelperText>Select Mood</FormHelperText>
                </FormControl>
                <TextField
                  id="worries"
                  placeholder="worries? lingering emotions?"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="goals"
                  placeholder="todos? short-term goals?"
                  value={this.state.description}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="alreadyAccomplished"
                  placeholder="what have you accomplished today?"
                  value={this.state.address}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="planToAccomplish"
                  placeholder="what do you still need to accomplish today?"
                  value={this.state.operatingHours}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="describeAppearance"
                  placeholder="describe the general quality of the bud"
                  value={this.state.operatingHours}
                  onChange={this.handleTextChange}
                  required
                />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Let's toke up
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default RecordPreLog;
