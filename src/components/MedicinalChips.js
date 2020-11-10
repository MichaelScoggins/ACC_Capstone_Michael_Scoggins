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

const medicinal = [
  "depression",
  "insomnia",
  "pain",
  "stress",
  "cramps",
  "lack of appetite",
  "nausea",
  "headache",
  "fatigue",
  "headaches",
  "eye pressure",
  "inflammation",
  "spasticity",
  "seizures",
  "muscle spasms",
];

function getStyles(pref, medPrefs, theme) {
  return {
    fontWeight:
      medPrefs.indexOf(pref) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MedicinalChips(props) {
  const classes = useStyles();
  const theme = useTheme();
  // const [medPrefs, setMedPrefs] = React.useState([]);

  const handleChange = (event) => {
    props.setMedPrefs(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="medicinal-chips-label">Treats: </InputLabel>
        <Select
          labelId="medicinal-chips-label"
          id="medicinal-chips"
          multiple
          value={props.medPrefs}
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
          {medicinal.map((effect) => (
            <MenuItem
              key={effect}
              value={effect}
              style={getStyles(effect, props.medPrefs, theme)}
            >
              {effect}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
