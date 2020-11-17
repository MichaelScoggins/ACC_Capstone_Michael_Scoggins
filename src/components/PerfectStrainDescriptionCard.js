import React from "react";
// import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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

export default function PerfectStrainDescriptionCard(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.fetchDescription(props.sID);
  }, []);

  // const strain = props.userSearchResults.find((s) => s.id == props.sID);
  // const strain = props.perfectStrainResults.find(
  //   (s) => s[1].id == props.sID
  // ) || [
  //   [
  //     "sorry! you'll have to be a little less picky than that!",

  //     { "id": "9999", "race": "sativa" },
  //   ],
  // ];

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    props.setDescriptionModal(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="strain"
      aria-describedby="strain-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography>
              <h3>
                {props.strainDescription
                  ? props.strainDescription
                  : "No Bio Available"}
              </h3>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}
