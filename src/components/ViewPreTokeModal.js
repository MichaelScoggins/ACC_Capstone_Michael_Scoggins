import React, { Fragment } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import Select from "@material-ui/core/Select";
// import { v4 as uuidv4 } from "uuid";
// import { faBong } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // Button,
  // TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
// import RecordReview from "../containers/forms/RecordReview";

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
    props.setViewPreTokeModal(false);
  };

  return (
    <Fragment>
      <Typography>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <Typography variant="h5">
              Before You Tried{" "}
              {
                <span style={{ color: "springgreen" }}>
                  {preLog.strain.name}
                </span>
              }
            </Typography>
          </DialogTitle>
          <DialogContent>
            While I'm feeling{" "}
            <span style={{ color: "orange" }}>{preLog.mood}</span>, I'm hoping
            to achieve <span style={{ color: "orange" }}>{preLog.reason}</span>,
            and expecting{" "}
            <span style={{ color: "orange" }}>{preLog.expectations}</span>. I'm
            thinking about{" "}
            <span style={{ color: "orange" }}>{preLog.worries}</span>, but{" "}
            <span style={{ color: "orange" }}>{preLog.goals}</span>. I have
            already{" "}
            <span style={{ color: "orange" }}>
              {preLog.alreadyAccomplished}
            </span>
            , and still need to{" "}
            <span style={{ color: "orange" }}>{preLog.planToAccomplish}</span>.
          </DialogContent>
        </Dialog>
      </Typography>
    </Fragment>
  );
}
