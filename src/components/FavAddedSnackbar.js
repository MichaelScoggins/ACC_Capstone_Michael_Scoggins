import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function FavAddedSnackbar(props) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    props.toggleSnackbar(false);
  };

  let strain = props.perfectStrainResults.find((s) => s[1].id == props.sID);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={props.snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`${strain} Added to Favorites`}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              ADD EXP
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
