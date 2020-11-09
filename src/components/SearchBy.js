import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SearchBy(props) {
  const classes = useStyles();
  // const [searchParam, setSearchParam] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    props.setSearchParams(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Search By...
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.searchParams}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Strain</em>
          </MenuItem>
          <MenuItem value="posEffects">Positive Effects</MenuItem>
          <MenuItem value="negEffects">Negative Effects</MenuItem>
          <MenuItem value="flavors">Flavors</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
