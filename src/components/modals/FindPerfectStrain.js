import React from "react";
import {
  Button,
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
} from "@material-ui/core";
import PosEffectsChips from "../../containers/cards/chips/PosEffectsChips";
import NegEffectsChips from "../../containers/cards/chips/NegEffectsChips";
import MedicinalChips from "../../containers/cards/chips/MedicinalChips";
import FlavorChips from "../../containers/cards/chips/FlavorChips";
import SpeciesPrefsChips from "../../containers/cards/chips/SpeciesPrefsChips";

export default function FindPerfectStrain(props) {
  React.useEffect(() => {
    props.fetchAllStrains();
  }, []);

  const handleClose = () => {
    props.toggleFindPerfectStrain(false);
  };

  const getPerfectStrains = async () => {
    props.toggleLoading(true);
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
    } else if (perfectStrains.length > 25) {
      return props.setPerfectStrainResults([
        ["too many results", { "id": 10000, race: "too many results" }],
      ]);
    }

    props.setPerfectStrainResults(perfectStrains);
  };

  const handleSubmit = () => {
    (props.posPrefs.length > 0 ||
      props.avoidPrefs.length > 0 ||
      props.medPrefs.length > 0 ||
      props.flavPrefs.length > 0 ||
      props.speciesPrefs.length > 0) &&
      getPerfectStrains();
    props.setPerfectStrainResults([]);

    handleClose();
  };

  const handleReset = () => {
    props.resetAllStrains({});
    props.setPosPrefs([]);
    props.setAvoidPrefs([]);
    props.setMedPrefs([]);
    props.setFlavPrefs([]);
    props.setSpeciesPrefs([]);
    props.fetchAllStrains();
  };

  return (
    <>
      <Dialog
        disableEscapeKeyDown
        open={props.findPerfectStrainModalOpen}
        onClose={handleClose}
      >
        <DialogTitle>
          <Typography variant="h5">What Are You Looking For?</Typography>
          <hr />
        </DialogTitle>
        <DialogContent>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "420px",
            }}
          >
            <FormControl>
              <PosEffectsChips />
              <MedicinalChips />
              <NegEffectsChips />
              <SpeciesPrefsChips />
              <FlavorChips />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReset} color="secondary" variant="contained">
            <Typography style={{ fontWeight: 600 }}>Reset</Typography>
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
    </>
  );
}
