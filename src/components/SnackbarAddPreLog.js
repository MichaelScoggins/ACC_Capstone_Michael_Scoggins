import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

export default function SnackbarAddPreLog(props) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    props.toggleSnackbar(false);
  };

  // let strain = props.perfectStrainResults.find((s) => s[1].id == props.sID);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={props.showSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message={
          <Typography>
            <span style={{ color: "springgreen" }}>{props.strainName}</span>{" "}
            Added To Experience
          </Typography>
        }
        action={
          <React.Fragment>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleClose}
            >
              Goto Exp
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
