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

export default function RecordPreLog(props) {
  const [open, toggleOpen] = React.useState(false);

  const toggleDialog = () => toggleOpen(!open);

  const handleTextChange = (e) => {
    const newState = props.preTokeForm;
    newState[e.target.id] = e.target.value;
    props.setPreTokeForm(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const exp = props.preTokeForm;
    exp.id = uuidv4();
    props.addListing(exp);
    toggleOpen(false);
  };

  React.useEffect(() => {
    props.setPreTokeForm({
      mood: "",
      worries: "",
      goals: "",
      alreadyAccomplished: "",
      planToAccomplish: "",
      describeAppearance: "",
    });
  }, []);

  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <Button
          color="primary"
          variant="contained"
          className="add-listing"
          onClick={toggleDialog}
        >
          <Typography>Record Experience</Typography>
        </Button>
      </div>
      <div>
        <Typography>
          <Dialog open={open} onClose={toggleDialog}>
            <DialogTitle>Before You Toke</DialogTitle>
            <DialogContent>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <FormControl>
                  <InputLabel id="moodInput">Mood</InputLabel>
                  <Select
                    labelId="moodSelect"
                    id="mood"
                    value={props.preTokeForm.mood}
                    onChange={handleTextChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"positive"}>Positive</MenuItem>
                    <MenuItem value={"neutral"}>Neutral</MenuItem>
                    <MenuItem value={"anxious"}>Anxious</MenuItem>
                  </Select>
                  <FormHelperText>
                    <Typography>Select Mood</Typography>
                  </FormHelperText>
                </FormControl>
                <TextField
                  id="worries"
                  label="Briefly Describe Your Horizon"
                  placeholder="Worries? Lingering emotions?"
                  multiline
                  value={props.preTokeForm.worries}
                  onChange={handleTextChange}
                  required
                />
                <TextField
                  id="goals"
                  label="Short/Long-Term Goals"
                  placeholder="How Will This Session Get You There?"
                  multiline
                  value={props.preTokeForm.goals}
                  onChange={handleTextChange}
                  required
                />
                <TextField
                  id="alreadyAccomplished"
                  label="To-Do(ne)"
                  placeholder="What have you already accomplished today?"
                  multiline
                  value={props.preTokeForm.alreadyAccomplished}
                  onChange={handleTextChange}
                  required
                />
                <TextField
                  id="planToAccomplish"
                  label="Todos (before you forget!)"
                  placeholder="What do you still need to accomplish today?"
                  multiline
                  value={props.preTokeForm.planToAccomplish}
                  onChange={handleTextChange}
                  required
                />
                <TextField
                  id="describeAppearance"
                  label="Appearance/Texture/Aroma/Density"
                  placeholder="Briefly describe the quality of the bud"
                  multiline
                  value={props.preTokeForm.describeAppearance}
                  onChange={handleTextChange}
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
        </Typography>
      </div>
    </Fragment>
  );
}
