import React, { Fragment } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
// import { v4 as uuidv4 } from "uuid";
// import { faBong } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import RecordReview from "../containers/forms/RecordReview";

export default function ViewPreTokeModal(props) {
  const [open, toggleOpen] = React.useState(true);

  // const toggleDialog = () => toggleOpen(!open);

  const preLog = props.experiences.preLogs.find(
    (pre) => pre.strain.id == props.sID
  );

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const exp = props.preTokeForm;
  //   console.log({ exp });
  //   exp.id = uuidv4();
  //   exp.strain.name = strain[0];
  //   exp.strain.race = strain[1].race;
  //   exp.strain.id = strain[1].id;
  //   props.preTokeForm.sessionNum = props.preTokeForm.sessionNum + 1;
  //   props.addPreExp(exp);
  //   toggleOpen(false);
  //   console.log(props.experiences);
  //   clearAll();
  // };

  // const clearAll = () => {
  //   props.setPreTokeForm({
  //     mood: "",
  //     worries: "",
  //     goals: "",
  //     alreadyAccomplished: "",
  //     planToAccomplish: "",
  //     describeAppearance: "",
  //   });
  // };

  // const handleTextChange = (e) => {
  //   const newState = props.preTokeForm;
  //   newState[e.target.id] = e.target.value;
  //   props.setPreTokeForm(newState);
  // };

  // const handleMoodSelect = (e) => {
  //   const newState = props.preTokeForm;
  //   newState["mood"] = e.target.value;
  //   props.setPreTokeForm(newState);
  // };

  const handleClose = () => {
    toggleOpen(false);
    props.setPreLogModal(false);
  };

  return (
    <Fragment>
      <Typography>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <RecordReview />
            <Typography variant="h5">
              Before You Try{" "}
              {/* {<span style={{ color: "springgreen" }}>{strain[0]}</span>} */}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "350px",
              }}
            >
              <FormControl>
                <InputLabel id="moodInput">Mood Prior To Experience</InputLabel>
                <Select
                  labelId="moodInput"
                  id="mood"
                  required
                  value={preLog.mood}
                >
                  <MenuItem value="whatever">
                    <em>Whatever</em>
                  </MenuItem>
                  <MenuItem value={"hurting"}>Physically Hurting</MenuItem>
                  <MenuItem value={"positive"}>Positive</MenuItem>
                  <MenuItem value={"stressed"}>Stressed</MenuItem>
                  <MenuItem value={"anxious"}>Anxious</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="reasonInput">
                  Did This Strain Help To Achieve Any Of The Following:
                </InputLabel>
                <Select labelId="reasonSelect" id="reason" required value={""}>
                  <MenuItem value={"pain"}>Pain Relief</MenuItem>
                  <MenuItem value={"stress"}>Stress Relief</MenuItem>
                  <MenuItem value={"creativity"}>Creativity</MenuItem>
                  <MenuItem value={"focus"}>Focus</MenuItem>
                  <MenuItem value={"recreation"}>Recreation</MenuItem>
                  <MenuItem value={"hobby"}>Hobby</MenuItem>
                  <MenuItem value={"modularity"}>Mental Modularity</MenuItem>
                  <MenuItem value={"other"}>other</MenuItem>
                </Select>
                <FormHelperText>
                  <Typography>whats this</Typography>
                </FormHelperText>
              </FormControl>
              <TextField
                id="experience"
                label="Experience"
                placeholder="What Did You Experience/Feel/Achieve?"
                multiline
                value={preLog.worries}
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="mood"
                label="Mood"
                placeholder="Mood Prior To Session"
                multiline
                value={preLog.worries}
                defaultValue="Hello World"
              />
              <TextField
                id="worries"
                label="Epiphanies? Regrets?"
                placeholder="How Did The Experience Transform Your Expectations?"
                multiline
                value={preLog.worries}
                defaultValue="Hello World"
              />
              <TextField
                id="alreadyAccomplished"
                label="To-Do(ne)"
                placeholder="What Have You Already Accomplished Today?"
                multiline
                value={props.preTokeForm.alreadyAccomplished}
                defaultValue="Hello World"
              />
              />
              <TextField
                id="alreadyAccomplished"
                label="Short/Long-Term Goals"
                placeholder="Did The Session Contribute To Your Short/Long-Term Goals? Did It Detract? How?"
                multiline
                value={preLog.alreadyAccomplished}
                defaultValue="Hello World"
              />
              <TextField
                id="describeAppearance"
                label="Appearance/Texture/Aroma/Density"
                placeholder="Briefly Describe The Quality Of The Bud"
                multiline
                value={preLog.describeAppearance}
                defaultValue="Hello World"
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
    </Fragment>
  );
}
