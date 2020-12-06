import React from "react";
// import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
// import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
// import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // maxWidth: 300,
    display: 'flex',
    wrap: 'nowrap',
    // fullWidth: true,
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

const flavors = [
  "Earthy",
  "Chemical",
  "Pine",
  "Spicy/Herbal",
  "Pungent",
  "Pepper",
  "Flowery",
  "Citrus",
  "Orange",
  "Sweet",
  "Skunk",
  "Grape",
  "Minty",
  "Woody",
  "Cheese",
  "Diesel",
  "Tropical",
  "Grapefruit",
  "Nutty",
  "Lemon",
  "Berry",
  "Blueberry",
  "Ammonia",
  "Apple",
  "Rose",
  "Butter",
  "Honey",
  "Tea",
  "Lime",
  "Lavender",
  "Strawberry",
  "Mint",
  "Chestnut",
  "Tree Fruit",
  "Pear",
  "Apricot",
  "Peach",
  "Blue Cheese",
  "Menthol",
  "Coffee",
  "Tar",
  "Mango",
  "Pineapple",
  "Sage",
  "Vanilla",
  "Plum",
  "Tobacco",
  "Violet",
];

function getStyles(pref, flavorPref, theme) {
  return {
    fontWeight:
      flavorPref.indexOf(pref) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FlavorChips(props) {
  const classes = useStyles();
  const theme = useTheme();
  // const [flavPrefs, setFlavorPref] = React.useState([]);
  // const error = [].filter((v) => v).length !== 2;
  const handleChange = (event) => {
    props.setFlavPrefs(event.target.value);
  };

  // const handleDelete = (value) => {
  //   console.log("delete");
  //   props.setFlavPrefs(props.flavPrefs.filter((x) => x !== value));
  // };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="flavors-chips-label">Select One Or Two Enticing Aromas: </InputLabel>
        <Select
          labelId="flavors-chips-label"
          id="flavors-chips"
          multiple
          value={props.flavPrefs}
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
          {flavors.sort().map((flavor) => (
            <MenuItem
              key={flavor}
              value={flavor}
              selected={flavor}
              style={getStyles(flavor, props.flavPrefs, theme)}
            >
              {flavor}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
