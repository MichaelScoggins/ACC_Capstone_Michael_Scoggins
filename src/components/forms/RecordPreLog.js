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

  let strain = props.perfectStrainResults.find((s) => s[1].id == props.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const exp = props.preTokeForm;
    console.log({ exp });
    exp.id = uuidv4();
    exp.strain = strain[0];
    props.preTokeForm.sessionNum = props.preTokeForm.sessionNum + 1;
    props.addPreExp(exp);
    toggleOpen(false);
    console.log(props.experiences);
    clearAll();
  };

  const clearAll = () => {
    props.setPreTokeForm({
      mood: "",
      worries: "",
      goals: "",
      alreadyAccomplished: "",
      planToAccomplish: "",
      describeAppearance: "",
    });
  };

  const handleTextChange = (e) => {
    const newState = props.preTokeForm;
    newState[e.target.id] = e.target.value;
    props.setPreTokeForm(newState);
  };

  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <Typography>
          <IconButton
            variant="contained"
            className="add-exp"
            onClick={toggleDialog}
          >
            <FontAwesomeIcon icon={faBong} size="3x" className="bong-icon" />
          </IconButton>
        </Typography>
      </div>
      <div>
        <Typography>
          <Dialog open={open} onClose={toggleDialog}>
            <DialogTitle>
              <Typography variant="h5">
                Before You Try{" "}
                {<span style={{ color: "springgreen" }}>{strain[0]}</span>}
              </Typography>
            </DialogTitle>
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
                  <Select
                    labelId="reasonSelect"
                    id="reason"
                    value={props.preTokeForm.mood}
                    onChange={handleTextChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"pain"}>pain</MenuItem>
                    <MenuItem value={"stress"}>stress</MenuItem>
                    <MenuItem value={"creativity"}>creativity</MenuItem>
                    <MenuItem value={"focus"}>creativity</MenuItem>
                    <MenuItem value={"recreation"}>recreation</MenuItem>
                    <MenuItem value={"hobby"}>other</MenuItem>
                    <MenuItem value={""}>other</MenuItem>
                    <MenuItem value={"hobby"}>other</MenuItem>
                    <MenuItem value={"hobby"}>other</MenuItem>
                  </Select>
                  <FormHelperText>
                    <Typography></Typography>
                  </FormHelperText>
                </FormControl>
                <TextField
                  id="worries"
                  label="Worries? Lingering thoughts? "
                  placeholder=""
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
