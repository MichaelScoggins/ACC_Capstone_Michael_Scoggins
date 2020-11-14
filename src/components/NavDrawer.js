import React from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import LockOpenIcon from "@material-ui/icons/LockOpen";
// import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";

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
  // const [state, setState] = React.useState(false);

  const toggleDrawer = (toggle) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    props.toggleDrawer(toggle);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key="home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="perfectStrain">
          <ListItemIcon>
            <GpsFixedIcon />
          </ListItemIcon>
          <ListItemText primary="Find Perfect Strain" />
        </ListItem>
        <ListItem button key="favorites">
          <ListItemIcon>
            <FavoriteBorderIcon />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem button key="archives">
          <ListItemIcon>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Archives" />
        </ListItem>
        <Divider />
        <List>
          <ListItem button key="account">
            <ListItemIcon>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
        </List>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Drawer
          anchor="left"
          open={props.drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
