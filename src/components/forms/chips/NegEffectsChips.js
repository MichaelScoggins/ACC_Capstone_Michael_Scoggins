import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // maxWidth: 300,
    display: 'flex',
    wrap: 'nowrap',
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  // noLabel: {
  //   marginTop: theme.spacing(3),
  // },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const negEffects = ["Dizzy", "Dry Mouth", "Paranoid", "Dry Eyes", "Anxious"];

function getStyles(pref, avoidPrefs, theme) {
  return {
    fontWeight:
      avoidPrefs.indexOf(pref) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function NegEffectsChips(props) {
  const classes = useStyles();
  const theme = useTheme();
  // const [negPrefs, setNegPrefs] = React.useState([]);

  const handleChange = (event) => {
    props.setAvoidPrefs(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="negEffects-chips-label">Select Any Intolerable Side Effects:</InputLabel>
        <Select
          labelId="negEffects-chips-label"
          id="negEffects-chips"
          multiple
          value={props.avoidPrefs}
          onChange={handleChange}
          input={<Input id="select-negEffects-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {negEffects.sort().map((effect) => (
            <MenuItem
              key={effect}
              value={effect}
              style={getStyles(effect, props.avoidPrefs, theme)}
            >
              {effect}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
