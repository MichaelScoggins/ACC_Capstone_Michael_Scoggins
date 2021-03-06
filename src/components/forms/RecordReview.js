import React, { Fragment } from "react";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
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

  const preLog = props.preLogs.find((prelog) => prelog.strainId == props.sID);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = props.reviewForm;
    review.username = props.user;
    await axios
      .get(`/prelogs/${props.user}`, {
        headers: {
          Authorization: `Bearer ${props.bearerToken}`,
        },
      })
      .then((response) => {
        review.session_id = response.data.find(
          (x) => x.strainId == props.sID
        ).id;
        return;
      });
    review.strainId = preLog.strainId;
    review.strainName = preLog.strainName;
    review.strainSpecies = preLog.strainSpecies;
    await props.addReview(review);
    axios.post("/reviews", review, {
      headers: {
        Authorization: `Bearer ${props.bearerToken}`,
      },
    });
    toggleOpen(false);
    clearAll();
  };

  const clearAll = () => {
    props.setReviewForm({
      budDescript: "",
      goodFor: "",
      transformedMood: "",
      transformedExpectations: "",
      experience: "",
      transformedWorries: "",
      transformedGoals: "",
    });
  };

  const handleTextChange = (e, x) => {
    const newState = props.reviewForm;
    newState[e.target.id] = e.target.value;
    newState[x] = e.target.value;
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
              Review{" "}
              {
                <span style={{ color: "springgreen" }}>
                  {preLog.strainName}
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
                The bud was{" "}
                <span style={{ color: "springgreen" }}>
                  {props.reviewForm.budDescript}
                </span>
                . This strain is good for{" "}
                <span style={{ color: "springgreen" }}>
                  {props.reviewForm.goodFor}
                </span>
                . I started out feeling{" "}
                <span style={{ color: "orange" }}>{preLog.preMood}</span>, and
                ended up feeling{" "}
                <span style={{ color: "orange" }}>
                  {props.reviewForm.transformedMood}
                </span>
                . I was expecting{" "}
                <span style={{ color: "orange" }}>
                  {preLog.expectToAchieve}
                </span>
                ; afterwards,{" "}
                <span style={{ color: "orange" }}>
                  {props.reviewForm.transformedExpectations}
                </span>
                . I was thinking about{" "}
                <span style={{ color: "orange" }}>
                  {preLog.lingeringWorries}
                </span>
                , and focusing on{" "}
                <span style={{ color: "orange" }}>{preLog.goal}</span>. I
                experienced{" "}
                <span style={{ color: "orange" }}>
                  {props.reviewForm.experience}
                </span>{" "}
                and my worries{" "}
                <span style={{ color: "orange" }}>
                  {props.reviewForm.transformedWorries}{" "}
                </span>
                .{" "}
                <span style={{ color: "orange" }}>
                  {props.reviewForm.transformedGoals}
                </span>
                .
              </div>

              <TextField
                id="budDescript"
                label="Appearance/Texture/Aroma/Density"
                placeholder="Briefly Describe The Quality Of The Bud"
                multiline
                value={props.reviewForm.budDescript}
                onChange={handleTextChange}
                required
              />
              <FormControl>
                <InputLabel id="reasonInput">
                  Did This Strain Help To Achieve Any Of The Following:
                </InputLabel>
                <Select
                  labelId="reasonInput"
                  id="goodFor"
                  required
                  value={props.reviewForm.goodFor}
                  onChange={(e) => handleTextChange(e, "goodFor")}
                >
                  <MenuItem value={"pain relief"}>Pain Relief</MenuItem>
                  <MenuItem value={"stress relief"}>Stress Relief</MenuItem>
                  <MenuItem value={"a creativity mindset"}>Creativity</MenuItem>
                  <MenuItem value={"focus"}>Focus</MenuItem>
                  <MenuItem value={"recreation"}>Recreation</MenuItem>
                  <MenuItem value={"stillness"}>Meditation</MenuItem>
                  <MenuItem value={"modularity"}>Mental Modularity</MenuItem>
                  <MenuItem value={"nothing!"}>Nothing</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="moodInput">New Mood</InputLabel>
                <Select
                  labelId="moodInput"
                  id="transformedMood"
                  required
                  value={props.reviewForm.transformedMood}
                  onChange={(e) => handleTextChange(e, "transformedMood")}
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
                id="transformedExpectations"
                label="Epiphanies? Regrets?"
                placeholder="How Did The Experience Transform Your Expectations?"
                multiline
                value={props.reviewForm.transformedExpectations}
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
                id="transformedWorries"
                label="Worries"
                placeholder="Have Your Worries Transformed? How?"
                multiline
                required
                value={props.reviewForm.transformedWorries}
                onChange={handleTextChange}
              />
              <TextField
                id="transformedGoals"
                label="Short/Long-Term Goals"
                placeholder="Did The Session Contribute To Your Short/Long-Term Goals? Did It Detract? How?"
                multiline
                required
                value={props.reviewForm.transformedGoals}
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
