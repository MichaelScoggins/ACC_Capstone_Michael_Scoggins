import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

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

export default function PerfectStrainDetails(props) {
  React.useEffect(() => {
    props.fetchDescription(props.sID);
  }, []);

  const classes = useStyles();

  const strain = Object.entries(props.allStrains).find(
    (s) => s[1].id == props.sID
  );
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setModal(false);
  };
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <Container maxWidth="md">
          <Box>
            <Typography>
              <h1 style={{ color: "green" }}>{strain[0]}</h1>
              <hr />
              <p>{props.strainDescription}</p>
            </Typography>
          </Box>
        </Container>
      </div>
    </Modal>
  );
}
