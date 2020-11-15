import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Loading(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      {props.perfectStrainResults.length > 0 && props.setLoading(false)}
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
