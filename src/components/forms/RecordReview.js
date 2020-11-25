import React, { Fragment } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import { v4 as uuidv4 } from "uuid";
// import { faBong } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

export default function RecordReview(props) {
  const [open, toggleOpen] = React.useState(true);

  const toggleDialog = () => toggleOpen(!open);

  const preLog = props.experiences.preLogs.find(
    (prelog) => prelog.strain.id == props.sID
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = props.reviewForm;
    console.log({ review });
    review.id = uuidv4();
    review.strain = preLog.strain;
    props.reviewForm.sessionNum = props.reviewForm.sessionNum + 1;
    props.addReview(review);
    toggleOpen(false);
    console.log("reviews", props.experiences.reviews);
    clearAll();
  };

  const clearAll = () => {
    props.setReviewForm({
      reason: "",
      mood: "",
      expectations: "",
      experience: "",
      worries: "",
      goals: "",
      describeAppearance: "",
    });
  };

  const handleTextChange = (e) => {
    const newState = props.reviewForm;
    newState[e.target.id] = e.target.value;
    props.setReviewForm(newState);
  };

  const handleMoodSelect = (e) => {
    const newState = props.reviewForm;
    newState["mood"] = e.target.value;
    props.setReviewForm(newState);
  };

  const handleReasonSelect = (e) => {
    const newState = props.reviewForm;
    newState["reason"] = e.target.value;
    props.setReviewForm(newState);
  };

  return (
    <Fragment>
      <Typography>
        <Dialog
          open={open}
          onClose={(toggleDialog, () => props.setAddReviewForm(false))}
        >
          <DialogTitle>
            <Typography variant="h5">
              Review
              {/* {<span style={{ color: "springgreen" }}>{strain[0]}</span>} */}
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
                The bud was{" "}
                <span style={{ color: "springgreen" }}>
                  {props.reviewForm.describeAppearance}
                </span>
                . This strain is good for{" "}
                <span style={{ color: "springgreen" }}>
                  {props.reviewForm.reason}
                </span>
                . I started out feeling{" "}
                <span style={{ color: "orange" }}>{preLog.mood}</span>, and
                ended up feeling{" "}
                <span style={{ color: "orange" }}>{props.reviewForm.mood}</span>
                . I was expecting{" "}
                <span style={{ color: "orange" }}>{preLog.expectations}; </span>
                afterwards,{" "}
                <span style={{ color: "orange" }}>
                  {props.reviewForm.expectations}
                </span>
                . I was thinking about{" "}
                <span style={{ color: "orange" }}>{preLog.worries}</span>, and
                believing{" "}
                <span style={{ color: "orange" }}>{preLog.goals}</span>. I
                experienced{" "}
                <span style={{ color: "orange" }}>
                  {props.reviewForm.experience}
                </span>{" "}
                and my worries{" "}
                <span style={{ color: "orange" }}>
                  {props.reviewForm.worries}{" "}
                </span>
                .{" "}
                <span style={{ color: "orange" }}>
                  {props.reviewForm.goals}
                </span>
                .
              </div>

              <TextField
                id="describeAppearance"
                label="Appearance/Texture/Aroma/Density"
                placeholder="Briefly Describe The Quality Of The Bud"
                multiline
                value={props.reviewForm.describeAppearance}
                onChange={handleTextChange}
                required
              />
              <FormControl>
                <InputLabel id="reasonInput">
                  Did This Strain Help To Achieve Any Of The Following:
                </InputLabel>
                <Select
                  labelId="reasonInput"
                  id="reason"
                  required
                  value={props.reviewForm.reason}
                  onChange={handleReasonSelect}
                >
                  <MenuItem value={"pain relief"}>Pain Relief</MenuItem>
                  <MenuItem value={"stress relief"}>Stress Relief</MenuItem>
                  <MenuItem value={"a creativity mindset"}>Creativity</MenuItem>
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
              <FormControl>
                <InputLabel id="moodInput">New Mood</InputLabel>
                <Select
                  labelId="moodInput"
                  id="mood"
                  required
                  value={props.reviewForm.mood}
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
              <TextField
                id="expectations"
                label="Epiphanies? Regrets?"
                placeholder="How Did The Experience Transform Your Expectations?"
                multiline
                value={props.reviewForm.expectations}
                onChange={handleTextChange}
                required
              />
              <TextField
                id="experience"
                label="Experience"
                placeholder="What Did You Experience/Feel/Achieve?"
                multiline
                required
                value={props.reviewForm.experience}
                onChange={handleTextChange}
              />
              <TextField
                id="worries"
                label="Worries"
                placeholder="Have Your Worries Transformed? How?"
                multiline
                required
                value={props.reviewForm.worries}
                onChange={handleTextChange}
              />
              <TextField
                id="goals"
                label="Short/Long-Term Goals"
                placeholder="Did The Session Contribute To Your Short/Long-Term Goals? Did It Detract? How?"
                multiline
                required
                value={props.reviewForm.goals}
                onChange={handleTextChange}
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "10px" }}
              >
                Leave Review
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Typography>
    </Fragment>
  );
}
