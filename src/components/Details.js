import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

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

export default function Details(props) {
  const classes = useStyles();

  const strainID = props.sID;
  React.useEffect(() => {
    props.fetchEffects(strainID);
    props.fetchFlavors(strainID);
  }, []);
  const strain = props.listings.find((s) => s.id == strainID);
  const positiveEffects = props.effects.positive;
  const negativeEffects = props.effects.negative;
  const medicalEffects = props.effects.medical;
  const flavors = props.flavors;

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setModal(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Container maxWidth="md">
        <Box>
          <Typography>
            <h1 style={{ color: "green" }}>{strain.name}</h1>
            <hr />
            <h2>
              Positive Effects: {""}
              <span style={{ color: "green" }}>
                {positiveEffects.join(", ")}
              </span>
            </h2>
            <h2>
              Negative Effects:{" "}
              <span style={{ color: "red" }}>{negativeEffects.join(", ")}</span>
            </h2>
            <h2 style={{ color: "" }}>
              Helps to treat: {""}
              <span style={{ color: "orange" }}>
                {medicalEffects.join(", ")}
              </span>
            </h2>
            <h2 style={{ color: "" }}>
              Flavors: {""}
              <span style={{ color: "yellow" }}>{flavors.join(", ")}</span>
            </h2>
          </Typography>
        </Box>
      </Container>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
