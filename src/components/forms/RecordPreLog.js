import React, { Component, Fragment } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import { v4 as uuidv4 } from "uuid";
import { faBong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const handleMoodTextChange = (e) => {
    props.setMood(e.target.value);
  };
  const handleWorriesTextChange = (e) => {
    props.setWorries(e.target.value);
  };
  const handleGoalsTextChange = (e) => {
    props.setGoals(e.target.value);
  };
  const handleAlreadyAccopmlishedTextChange = (e) => {
    props.setAlreadyAccomplished(e.target.value);
  };
  const handlePlanToAccomplishTextChange = (e) => {
    props.setPlanToAccomplish(e.target.value);
  };
  const handleDescribeAppearanceTextChange = (e) => {
    props.setDescribeAppearance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const exp = props.preTokeForm;
    console.log({ exp });
    exp.id = uuidv4();
    props.addPreExp(exp);
    toggleOpen(false);
    console.log(props.experiences);
    clearAll();
  };

  const clearAll = () => {
    props.setMood("");
    props.setWorries("");
    props.setGoals("");
    props.setAlreadyAccomplished("");
    props.setPlanToAccomplish("");
    props.setDescribeAppearance("");
  };

  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <Typography>
          <IconButton
            color="primary"
            variant="contained"
            className="add-listing"
            onClick={toggleDialog}
          >
            <FontAwesomeIcon icon={faBong} size="3x" className="bong-icon" />
          </IconButton>
        </Typography>
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
                    onChange={handleMoodTextChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"positive"}>Positive</MenuItem>
                    <MenuItem value={"neutral"}>Neutral</MenuItem>
                    <MenuItem value={"anxious"}>Anxious</MenuItem>
                  </Select>
                  <FormHelperText>
                    <Typography></Typography>
                  </FormHelperText>
                </FormControl>
                <TextField
                  id="worries"
                  label="Worries? Lingering emotions?"
                  placeholder="Briefly Describe Your Horizon"
                  multiline
                  value={props.preTokeForm.worries}
                  onChange={handleWorriesTextChange}
                  required
                />
                <TextField
                  id="goals"
                  label="Short/Long-Term Goals"
                  placeholder="How Will This Session Get You There?"
                  multiline
                  value={props.preTokeForm.goals}
                  onChange={handleGoalsTextChange}
                  required
                />
                <TextField
                  id="alreadyAccomplished"
                  label="To-Do(ne)"
                  placeholder="What have you already accomplished today?"
                  multiline
                  value={props.preTokeForm.alreadyAccomplished}
                  onChange={handleAlreadyAccopmlishedTextChange}
                  required
                />
                <TextField
                  id="planToAccomplish"
                  label="Todos (before you forget!)"
                  placeholder="What do you still need to accomplish today?"
                  multiline
                  value={props.preTokeForm.planToAccomplish}
                  onChange={handlePlanToAccomplishTextChange}
                  required
                />
                <TextField
                  id="describeAppearance"
                  label="Appearance/Texture/Aroma/Density"
                  placeholder="Briefly describe the quality of the bud"
                  multiline
                  value={props.preTokeForm.describeAppearance}
                  onChange={handleDescribeAppearanceTextChange}
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
