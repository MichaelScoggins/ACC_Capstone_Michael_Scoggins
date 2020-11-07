import React from "react";
import axios from "axios";
import cookie from "cookie";
import { useLocation } from "react-router-dom";
import { InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import ListStrains from "./ListStrains";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();

  // const [listings, setListings] = React.useState({});
  const [input, setInput] = React.useState("");

  // const fetchStrains = () => {
  //   return axios
  //     .get(
  //       `https://strainapi.evanbusse.com/jXftQqp/strains/search/name/${input}`
  //     )
  //     .then((res) => {
  //       setListings([listings]);
  //     });
  // };

  // React.useEffect(() => {
  //   fetchStrains(input);
  // }, []);

  // const onInput = (input) => {
  //   setInput({ input });
  // };

  const handleChange = (e) => {
    console.log(props.listings);
    console.log({ input });
    setInput(e.target.value);
    console.log({ input });
    props.fetchListings(input);
    console.log(props.listings);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
    </div>
  );
}
