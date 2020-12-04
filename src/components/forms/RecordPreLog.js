import React, { Fragment } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Tooltip,
  Zoom,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SnackbarAddPreLog from "../modals/SnackbarAddPreLog";

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

  const strain = props.perfectStrainResults.find((s) => s[1].id == props.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const preLog = props.preTokeForm;
    console.log({ preLog });
    // preLog.id = uuidv4();
    preLog.strainId = strain[1].id;
    preLog.strainName = props.strainNamestrainSpecies = strain[1].race;
    preLog.preWhen = currentdate.toLocaleDateString();
    preLog.username = props.user;
    props.addPreExp(preLog);
    axios.post("http://localhost:5500/prelogs", preLog);
    toggleOpen(false);
    console.log(props.experiences.preLogs);
    clearAll();
    toggleSnackbar(true);
  };

  const clearAll = () => {
    props.setPreTokeForm({
      sessionPurpose: "",
      preMood: "",
      expectToAchieve: "",
      lingeringWorries: "",
      goal: "",
      alreadyDone: "",
      todo: "",
    });
  };

  const handleTextChange = (e, x) => {
    const newState = props.preTokeForm;
    newState[e.target.id] = e.target.value;
    newState[x] = e.target.value;
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
        strainName={props.strainNamestrainName}
      />
      <div style={{ textAlign: "center" }}>
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
                {
                  <span style={{ color: "springgreen" }}>
                    {props.strainName}
                  </span>
                }
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
                    {props.preTokeForm.preMood}
                  </span>
                  , I'm hoping to achieve{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.sessionPurpose}
                  </span>
                  , and expecting{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.expectToAchieve}
                  </span>
                  . I'm thinking about{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.lingeringWorries}
                  </span>
                  , but{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.goal}
                  </span>
                  . I have already{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.alreadyDone}
                  </span>
                  , and still need to{" "}
                  <span style={{ color: "orange" }}>
                    {props.preTokeForm.todo}
                  </span>
                  .
                </div>
                <FormControl>
                  <InputLabel id="preMoodInput">Current Mood</InputLabel>
                  <Select
                    labelId="preMoodInput"
                    id="preMood"
                    required
                    value={props.preTokeForm.preMood}
                    onChange={(e) => handleTextChange(e, "preMood")}
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
                  <InputLabel id="sessionPurposeInput">
                    What Do You Hope To Achieve With This Strain?
                  </InputLabel>
                  <Select
                    labelId="sessionPurposeSelect"
                    id="sessionPurpose"
                    value={props.preTokeForm.sessionPurpose}
                    onChange={(e) => handleTextChange(e, "sessionPurpose")}
                    required
                  >
                    <MenuItem value={"pain relief"}>Pain Relief</MenuItem>
                    <MenuItem value={"stress relief"}>Stress Relief</MenuItem>
                    <MenuItem value={"a creativity mindset"}>
                      Creativity
                    </MenuItem>
                    <MenuItem value={"focus"}>Focus</MenuItem>
                    <MenuItem value={"social awareness"}>Recreation</MenuItem>
                    <MenuItem value={"an increased appreciation for art"}>
                      Art Enhancement
                    </MenuItem>
                    <MenuItem value={"stillness"}>Meditation</MenuItem>
                    <MenuItem value={"modularity"}>Mental Modularity</MenuItem>
                    <MenuItem value={"something personal"}>Other</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="expectToAchieve"
                  label="Expectations"
                  placeholder="What Do You Expect To Experience/Feel/Achieve?"
                  multiline
                  value={props.preTokeForm.expectToAchieve}
                  onChange={handleTextChange}
                  required
                />
                <TextField
                  id="lingeringWorries"
                  label="Worries? Lingering thoughts?"
                  placeholder="Trying To Forget Something? Or Dwell On Something?"
                  multiline
                  value={props.preTokeForm.lingeringWorries}
                  onChange={handleTextChange}
                  required
                />
                <TextField
                  id="goal"
                  label="Short/Long-Term Goals"
                  placeholder="How Will This Session Get You There?"
                  multiline
                  value={props.preTokeForm.goal}
                  onChange={handleTextChange}
                  required
                />
                <TextField
                  id="alreadyDone"
                  label="To-Do(ne)"
                  placeholder="What Have You Already Accomplished Today?"
                  multiline
                  value={props.preTokeForm.alreadyDone}
                  onChange={handleTextChange}
                  required
                />
                <TextField
                  id="todo"
                  label="Todos (before you forget!)"
                  placeholder="What Do You Still Need To Accomplish Today?"
                  multiline
                  value={props.preTokeForm.todo}
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
