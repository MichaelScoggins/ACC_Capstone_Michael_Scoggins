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
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
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

const posEffects = [
  "Hungry",
  "Euphoric",
  "Happy",
  "Creative",
  "Energetic",
  "Talkative",
  "Uplifted",
  "Tingly",
  "Sleepy",
  "Focused",
  "Giggly",
  "Aroused",
];

function getStyles(pref, posPrefs, theme) {
  return {
    fontWeight:
      posPrefs.indexOf(pref) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PosEffectsChips(props) {
  const classes = useStyles();
  const theme = useTheme();
  // const [posPrefs, setPosPrefs] = React.useState([]);

  const handleChange = (event) => {
    props.setPosPrefs(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="posEffects-chips-label">Preferred Effects</InputLabel>
        <Select
          labelId="posEffects-chips-label"
          id="posEffects-chips"
          multiple
          value={props.posPrefs}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {posEffects.map((effect) => (
            <MenuItem
              key={effect}
              value={effect}
              style={getStyles(effect, props.posPrefs, theme)}
            >
              {effect}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
