import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Grid, Typography } from "@material-ui/core";

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
    flexGrow: 1,
  },
}));

export default function PerfectStrainDetailsCard(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.fetchEffects(props.sID);
    props.fetchFlavors(props.sID);
  }, []);

  const strain = props.perfectStrainResults.find((s) => s[1].id == props.sID);
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
    props.setDetailsModal(false);
  };

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
            <Typography>
              <div style={{ textAlign: "center" }}>
                <h1
                  style={{
                    color:
                      props.strainRace === "sativa"
                        ? "gold"
                        : props.strainRace === "indica"
                        ? "orchid"
                        : "indianred",
                  }}
                >
                  {props.strainName || strain[0]}
                  <br />
                  <span style={{ color: "cornflowerblue" }}>Details</span>
                </h1>
              </div>
            </Typography>
            <hr />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <h2>
                Positive Effects: {""}
                <span style={{ color: "springgreen" }}>
                  {positiveEffects.join(", ")}
                </span>
              </h2>
              <h2>
                Negative Effects:{" "}
                <span style={{ color: "red" }}>
                  {negativeEffects.join(", ")}
                </span>
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
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}
