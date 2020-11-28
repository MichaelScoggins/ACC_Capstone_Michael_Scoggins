import React from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function NavDrawer(props) {
  const classes = useStyles();
  const [redirect, setRedirect] = React.useState(null);

  React.useEffect(() => {
    setRedirect(null);
  });

  const toggleDrawer = (toggle) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.toggleDrawer(toggle);
  };

  const handleRedirect = (link) => {
    setRedirect(link);
  };

  const handleFindPerfect = () => {
    props.setPerfectStrainResults([]);
    setRedirect("/");
    props.toggleFindPerfectStrain(true);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(!props.drawerOpen)}
      onKeyDown={toggleDrawer(!props.drawerOpen)}
    >
      <List>
        <ListItem onClick={() => handleRedirect("/")} button key="home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          onClick={() => handleFindPerfect()}
          button
          key="perfectStrain"
        >
          <ListItemIcon>
            <GpsFixedIcon />
          </ListItemIcon>
          <ListItemText primary="Find Perfect Strain" />
        </ListItem>
        <ListItem
          onClick={() => handleRedirect("/favorites")}
          button
          key="favorites"
        >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem
          onClick={() => handleRedirect("/experience")}
          button
          key="experience"
        >
          <ListItemIcon>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItem>
        <Divider />
        <List>
          <ListItem onClick={handleRedirect} button key="account">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
        </List>
      </List>
    </div>
  );

  return (
    <React.Fragment key="left">
      {redirect && <Redirect to={redirect} />}
      <Drawer
        anchor="left"
        open={props.drawerOpen}
        onClose={toggleDrawer(!props.drawerOpen)}
      >
        {list("left")}
      </Drawer>
    </React.Fragment>
  );
}
