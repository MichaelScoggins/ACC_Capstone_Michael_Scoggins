import React from "react";
// import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SearchResultsDetails(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.fetchEffects(props.sID);
    props.fetchFlavors(props.sID);
    props.fetchDescription(props.sID);
  }, []);

  const strain = props.userSearchResults.find((s) => s.id == props.sID);
  const positiveEffects = props.effects.positive;
  const negativeEffects = props.effects.negative;
  const medicalEffects = props.effects.medical;
  const flavors = props.flavors;

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    props.setModal(false);
  };

  const strainDisplayName =
    strain.race.charAt(0).toUpperCase() + strain.race.slice(1);

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h1 style={{ color: "springgreen", textAlign: "center" }}>
              {strain.name}{" "}
              {
                <div
                  style={{
                    color:
                      strain.race === "sativa"
                        ? "orange"
                        : strain.race === "indica"
                        ? "orchid"
                        : "indianred",
                  }}
                >
                  {strainDisplayName}
                </div>
              }
            </h1>
            <hr />
          </Grid>
          <Grid item xs={12}>
            <h2>
              Positive Effects: {""}
              <span style={{ color: "springgreen" }}>
                {positiveEffects.join(", ")}
              </span>
            </h2>
            <h2>
              Negative Effects:{" "}
              <span style={{ color: "red" }}>{negativeEffects.join(", ")}</span>
            </h2>
            <h2 style={{ color: "" }}>
              Helps to treat: {""}
              <span style={{ color: "cornflowerblue" }}>
                {medicalEffects.join(", ")}
              </span>
            </h2>
            <h2 style={{ color: "" }}>
              Flavors: {""}
              <span style={{ color: "orange" }}>{flavors.join(", ")}</span>
            </h2>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" style={{ color: "lightgray" }}>
              {props.strainDescription}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}
