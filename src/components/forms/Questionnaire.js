import React from "react";
import { Redirect } from "react-router-dom";
// import Grid from '@material-ui/core/Grid'
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import DialogActions from "@material-ui/core/DialogActions";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
// import IconButton from "@material-ui/core/IconButton";
// import { faBong } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Select from "@material-ui/core/Select";
// import { v4 as uuidv4 } from "uuid";
import {
  Button,
  // TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import Loading from "../../containers/Loading";
import PosEffectsChips from "../../containers/chips/PosEffectsChips";
import NegEffectsChips from "../../containers/chips/NegEffectsChips";
import FlavorChips from "../../containers/chips/FlavorChips";
import SpeciesPrefsChips from "../../containers/chips/SpeciesPrefsChips";
import MedicinalChips from "../../containers/chips/MedicinalChips";

export default function Questionnaire(props) {
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [redirect, setRedirect] = React.useState(null);

  const [open, toggleOpen] = React.useState(false);
  // const toggleDialog = () => toggleOpen(!open);

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
    setLoading(true);
    (props.posPrefs.length > 0 ||
      props.avoidPrefs.length > 0 ||
      props.medPrefs.length > 0 ||
      props.flavPrefs.length > 0 ||
      props.speciesPrefs.length > 0) &&
      getPerfectStrains();

    handleClose();
    // setRedirect('/');
    setRedirect(true);
    // return <Redirect to="/" />;
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

  if (loading) return <Loading setLoading={setLoading} />;

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div>
        <Link
          disabled
          style={{ cursor: "pointer", color: "springgreen" }}
          variant="body2"
          onClick={() => handleClickOpen()}
        >
          {"Continue As Guest"}
        </Link>
      </div>

      <Container>
        <Dialog
          disableBackdropClick
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
              <Typography> Ok</Typography>
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}
