import React, { Component, Fragment } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
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
import RecordReview from "../../containers/forms/RecordReview";

export default function RecordPreLog(props) {
  const [open, toggleOpen] = React.useState(false);
  const [currentForm, setCurrentForm] = React.useState(true);

  const toggleDialog = () => toggleOpen(!open);

  let strain = props.perfectStrainResults.find((s) => s[1].id == props.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const exp = props.preTokeForm;
    console.log({ exp });
    exp.id = uuidv4();
    exp.strain.name = strain[0];
    exp.strain.race = strain[1].race;
    exp.strain.id = strain[1].id;
    props.preTokeForm.sessionNum = props.preTokeForm.sessionNum + 1;
    props.addPreExp(exp);
    toggleOpen(false);
    console.log(props.experiences);
    clearAll();
  };

  const switchForms = () => {
    setCurrentForm(!currentForm);
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

  const handleMoodSelect = (e) => {
    const newState = props.preTokeForm;
    newState["mood"] = e.target.value;
    props.setPreTokeForm(newState);
  };

  const preForm = (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "350px",
      }}
    >
      <FormControl>
        <InputLabel id="moodInput">Current Mood</InputLabel>
        <Select
          labelId="moodInput"
          id="mood"
          required
          value={props.preTokeForm.mood}
          onChange={handleMoodSelect}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"neutral"}>Neutral</MenuItem>
          <MenuItem value={"positive"}>Positive</MenuItem>
          <MenuItem value={"negative"}>Negative</MenuItem>
          <MenuItem value={"anxious"}>Anxious</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="reasonInput">
          What Do You Hope To Achieve With This Strain?
        </InputLabel>
        <Select
          labelId="reasonSelect"
          id="reason"
          value={""}
          onChange={handleTextChange}
        >
          <MenuItem value={"pain"}>Pain Relief</MenuItem>
          <MenuItem value={"stress"}>Stress Relief</MenuItem>
          <MenuItem value={"creativity"}>Creativity</MenuItem>
          <MenuItem value={"focus"}>Focus</MenuItem>
          <MenuItem value={"recreation"}>Recreation</MenuItem>
          <MenuItem value={"hobby"}>Hobby</MenuItem>
          <MenuItem value={"modularity"}>Mental Modularity</MenuItem>
          <MenuItem value={"other"}>other</MenuItem>
        </Select>
        {/* <FormHelperText>
        <Typography>whats this</Typography>
      </FormHelperText> */}
      </FormControl>
      <br />
      <Typography variant="body1" style={{ color: "#FFA726" }}>
        Track Your Experiences (optional)
      </Typography>
      <TextField
        id="expectations"
        label="Expectations"
        placeholder="What Do You Expect To Experience/Feel/Achieve?"
        multiline
        value={props.preTokeForm.worries}
        onChange={handleTextChange}
      />
      <TextField
        id="worries"
        label="Worries? Lingering thoughts?"
        placeholder="Trying To Forget Something?"
        multiline
        value={props.preTokeForm.worries}
        onChange={handleTextChange}
      />
      <TextField
        id="goals"
        label="Short/Long-Term Goals"
        placeholder="How Will This Session Get You There?"
        multiline
        value={props.preTokeForm.goals}
        onChange={handleTextChange}
      />
      <TextField
        id="alreadyAccomplished"
        label="To-Do(ne)"
        placeholder="What Have You Already Accomplished Today?"
        multiline
        value={props.preTokeForm.alreadyAccomplished}
        onChange={handleTextChange}
        required
      />
      <TextField
        id="planToAccomplish"
        label="Todos (before you forget!)"
        placeholder="What Do You Still Need To Accomplish Today?"
        multiline
        value={props.preTokeForm.planToAccomplish}
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
  );

  const reviewForm = (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "350px",
      }}
    >
      <FormControl>
        <InputLabel id="moodInput">New Mood</InputLabel>
        <Select
          labelId="moodInput"
          id="mood"
          required
          value={props.preTokeForm.mood}
          onChange={handleMoodSelect}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"neutral"}>Neutral</MenuItem>
          <MenuItem value={"positive"}>Positive</MenuItem>
          <MenuItem value={"negative"}>Negative</MenuItem>
          <MenuItem value={"anxious"}>Anxious</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="reasonInput">
          Did This Strain Help To Achieve Any Of The Following:
        </InputLabel>
        <Select
          labelId="reasonSelect"
          id="reason"
          required
          value={""}
          onChange={handleTextChange}
        >
          <MenuItem value={"pain"}>Pain Relief</MenuItem>
          <MenuItem value={"stress"}>Stress Relief</MenuItem>
          <MenuItem value={"creativity"}>Creativity</MenuItem>
          <MenuItem value={"focus"}>Focus</MenuItem>
          <MenuItem value={"recreation"}>Recreation</MenuItem>
          <MenuItem value={"hobby"}>Hobby</MenuItem>
          <MenuItem value={"modularity"}>Mental Modularity</MenuItem>
          <MenuItem value={"other"}>other</MenuItem>
        </Select>
        {/* <FormHelperText>
            <Typography>whats this</Typography>
          </FormHelperText> */}
      </FormControl>
      <TextField
        id="experience"
        label="Experience"
        placeholder="What Did You Experience/Feel/Achieve?"
        multiline
        value={props.preTokeForm.worries}
        onChange={handleTextChange}
      />
      <TextField
        id="worries"
        label="Epiphanies? Regrets?"
        placeholder="How Did The Experience Transform Your Expectations?"
        multiline
        value={props.preTokeForm.worries}
        onChange={handleTextChange}
      />
      <TextField
        id="goals"
        label="Short/Long-Term Goals"
        placeholder="Did The Session Contribute To Your Short/Long-Term Goals? Did It Detract? How?"
        multiline
        value={props.preTokeForm.goals}
        onChange={handleTextChange}
      />
      <TextField
        id="describeAppearance"
        label="Appearance/Texture/Aroma/Density"
        placeholder="Briefly Describe The Quality Of The Bud"
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
  );

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
              <RecordReview />
              <Typography variant="h5">
                Before You Try{" "}
                {/* {<span style={{ color: "springgreen" }}>{strain[0]}</span>} */}
              </Typography>
              <Button onClick={switchForms}>switch forms</Button>
            </DialogTitle>
            <DialogContent>{currentForm ? preForm : reviewForm}</DialogContent>
          </Dialog>
        </Typography>
      </div>
    </Fragment>
  );
}
