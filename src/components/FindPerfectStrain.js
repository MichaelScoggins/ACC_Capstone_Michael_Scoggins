import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import { Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// import InputLabel from "@material-ui/core/InputLabel";
// import Input from "@material-ui/core/Input";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import PosEffectsChips from "../containers/chips/PosEffectsChips";
import NegEffectsChips from "../containers/chips/NegEffectsChips";
import MedicinalChips from "../containers/chips/MedicinalChips";
import FlavorChips from "../containers/chips/FlavorChips";
import SpeciesPrefsChips from "../containers/chips/SpeciesPrefsChips";
import Loading from "../containers/Loading";
// import { Redirect } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

export default function FindPerfectStrain(props) {
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  // const [redirect, setRedirect] = React.useState(false);

  // React.useEffect(() => {
  //   props.fetchAllStrains();
  // }, []);

  // const handleChange = (event) => {
  //   setAge(Number(event.target.value) || "");
  // };

  const handleClickOpen = () => {
    props.setPerfectStrainResults([]);
    props.toggleFindPerfectStrain(true);
    props.fetchAllStrains();
  };

  const handleClose = () => {
    props.toggleFindPerfectStrain(false);
  };

  const getPerfectStrains = async () => {
    setLoading(true);
    await props.fetchAllStrains();
    const perfectStrains = Object.entries(props.allStrains).filter(
      (strain) =>
        props.posPrefs.every((effect) =>
          strain[1].effects.positive.includes(effect)
        ) &&
        props.medPrefs.every((effect) =>
          strain[1].effects.medical.includes(effect)
        ) &&
        props.flavPrefs.every((effect) => strain[1].flavors.includes(effect)) &&
        props.avoidPrefs.every(
          (effect) => !strain[1].effects.negative.includes(effect)
        ) &&
        (props.speciesPrefs.length === 0 ||
          props.speciesPrefs.includes(strain[1].race))
    );
    if (perfectStrains.length === 0) {
      return props.setPerfectStrainResults([
        ["no results", { "id": 9999, race: "no results" }],
      ]);
    }
    // console.log("state", props.perfectStrainResults);

    props.setPerfectStrainResults(perfectStrains);
  };

  const handleSubmit = () => {
    (props.posPrefs.length > 0 ||
      props.avoidPrefs.length > 0 ||
      props.medPrefs.length > 0 ||
      props.flavPrefs.length > 0 ||
      props.speciesPrefs.length > 0) &&
      getPerfectStrains();

    handleClose();
    // setRedirect(true);
  };

  const handleReset = () => {
    props.resetAllStrains({});
    props.setPosPrefs([]);
    props.setAvoidPrefs([]);
    props.setMedPrefs([]);
    props.setFlavPrefs([]);
    props.setSpeciesPrefs([]);
    props.fetchAllStrains();
    // setRedirect(true);
  };

  return (
    <div>
      <Typography>
        <Button
          onClick={() => handleClickOpen()}
          variant="contained"
          color="primary"
        >
          <Typography>Find The Perfect Strain</Typography>
        </Button>
        {loading && <Loading setLoading={setLoading} />}
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={props.findPerfectStrainModalOpen}
          onClose={handleClose}
        >
          <DialogTitle>
            <Typography>Select Your Preferences</Typography>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <SpeciesPrefsChips />
                <PosEffectsChips />
                <NegEffectsChips />
              </Grid>
              <Grid item xs={6}>
                <MedicinalChips />
                <FlavorChips />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleReset} color="secondary" variant="contained">
              <Typography> Reset</Typography>
            </Button>
            <Button onClick={handleClose} color="primary" variant="contained">
              <Typography> Cancel</Typography>
            </Button>
            <Button
              onClick={() => handleSubmit()}
              color="primary"
              variant="contained"
            >
              <Typography>Ok</Typography>
            </Button>
          </DialogActions>
        </Dialog>
      </Typography>

      {/* {redirect && <Redirect to="/perfectstrain" />} */}
    </div>
  );
}
