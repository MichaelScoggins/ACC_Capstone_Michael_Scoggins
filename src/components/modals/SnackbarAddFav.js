import React from "react";
import { Link } from "react-router-dom";
import { Button, Snackbar, IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function SnackbarAddFav(props) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    props.toggleSnackbar(false);
  };

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
        message={
          <Typography>
            <span style={{ color: "purple" }}>{props.title}</span> Added to
            Favorites
          </Typography>
        }
        action={
          <React.Fragment>
            <Link to="/favorites" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                style={{ cursor: "pointer" }}
              >
                Go To Favs
              </Button>
            </Link>
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
