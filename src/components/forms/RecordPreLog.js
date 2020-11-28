import React, { Fragment } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import { v4 as uuidv4 } from "uuid";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
// import RecordReview from "../../containers/forms/RecordReview";
import SnackbarAddPreLog from "../SnackbarAddPreLog";

export default function RecordPreLog(props) {
  const [open, toggleOpen] = React.useState(false);
  const [showSnackbar, toggleSnackbar] = React.useState(false);

  const toggleDialog = () => toggleOpen(!open);

  var currentdate = new Date();
  var datetime =
    currentdate.getMonth() +
    1 +
    "/" +
    currentdate.getDate() +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  let strain = props.perfectStrainResults.find((s) => s[1].id == props.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const preLog = props.preTokeForm;
    console.log({ preLog });
    preLog.id = uuidv4();
    preLog.when = currentdate.toLocaleDateString();
    preLog.strain = strain[1];
    preLog.strain.name = strain[0];
    preLog.sessionNum = props.experiences.preLogs.length + 1;
    props.addPreExp(preLog);
    toggleOpen(false);
    console.log(props.experiences.preLogs);
    clearAll();
    toggleSnackbar(true);
  };

  const clearAll = () => {
    props.setPreTokeForm({
      reason: "",
      mood: "",
      expectations: "",
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

  const handleReasonSelect = (e) => {
    const newState = props.preTokeForm;
    newState["reason"] = e.target.value;
    props.setPreTokeForm(newState);
  };

  const AddExpToolTip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#424242",
      color: "orange",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }))(Tooltip);

  return (
    <Fragment>
      <SnackbarAddPreLog
        toggleSnackbar={toggleSnackbar}
        showSnackbar={showSnackbar}
        strainName={strain[0]}
      />
      <div style={{ textAlign: "center" }}>
        {/* <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title="Add Exp"
          margin={0}
        > */}

        <AddExpToolTip
          title={
            <React.Fragment>
              <Typography>Add Exp</Typography>
            </React.Fragment>
          }
          placement="top"
          TransitionComponent={Zoom}
        >
          <Typography
            className="add-exp"
            style={{ cursor: "pointer" }}
            onClick={toggleDialog}
          >
            <FontAwesomeIcon
              icon={faUserAstronaut}
              size="5x"
              className="bong-icon"
            />
          </Typography>
        </AddExpToolTip>
      </div>
      <div>
        <Typography>
          <Dialog open={open} onClose={toggleDialog}>
            <DialogTitle>
              <Typography variant="h5">
                Before You Experience{" "}
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
                <div style={{ paddingBottom: 10 }}>
                  While I'm feeling{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.mood}
                  </span>
                  , I'm hoping to achieve{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.reason}
                  </span>
                  , and expecting{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.expectations}
                  </span>
                  . I'm thinking about{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.worries}
                  </span>
                  , but{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.goals}
                  </span>
                  . I have already{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.alreadyAccomplished}
                  </span>
                  , and still need to{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.planToAccomplish}
                  </span>
                  .
                </div>
                <FormControl>
                  <InputLabel id="moodInput">Current Mood</InputLabel>
                  <Select
                    labelId="moodInput"
                    id="mood"
                    required
                    value={props.preTokeForm.mood}
                    onChange={handleMoodSelect}
                  >
                    <MenuItem value="normal">
                      <em>Normal</em>
                    </MenuItem>
                    <MenuItem value={"positive"}>Positive</MenuItem>
                    <MenuItem value={"stressed"}>Stressed</MenuItem>
                    <MenuItem value={"anxious"}>Anxious</MenuItem>
                    <MenuItem value={"depressed"}>Depressed</MenuItem>
                    <MenuItem value={"pain"}>In Pain</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="reasonInput">
                    What Do You Hope To Achieve With This Strain?
                  </InputLabel>
                  <Select
                    labelId="reasonSelect"
                    id="reason"
                    value={props.preTokeForm.reason}
                    onChange={handleReasonSelect}
                    required
                  >
                    <MenuItem value={"pain relief"}>Pain Relief</MenuItem>
                    <MenuItem value={"stress relief"}>Stress Relief</MenuItem>
                    <MenuItem value={"a creativity mindset"}>
                      Creativity
                    </MenuItem>
                    <MenuItem value={"focus"}>Focus</MenuItem>
                    <MenuItem value={"social awareness"}>Recreation</MenuItem>
                    <MenuItem value={"stillness"}>Meditation</MenuItem>
                    <MenuItem value={"modularity"}>Mental Modularity</MenuItem>
                    <MenuItem value={"something personal"}>Other</MenuItem>
                  </Select>
                  {/* <FormHelperText>
        <Typography>whats this</Typography>
      </FormHelperText> */}
                </FormControl>
                {/* <br />
      <Typography variant="body1" style={{ color: "#FFA726" }}>
        Track Your Experiences (optional)
      </Typography> */}
                <TextField
                  id="expectations"
                  label="Expectations"
                  placeholder="What Do You Expect To Experience/Feel/Achieve?"
                  multiline
                  value={props.preTokeForm.expectations}
                  onChange={handleTextChange}
                  required
                />
                <TextField
                  id="worries"
                  label="Worries? Lingering thoughts?"
                  placeholder="Trying To Forget Something? Or Dwell On Something?"
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
            </DialogContent>
          </Dialog>
        </Typography>
      </div>
    </Fragment>
  );
}
