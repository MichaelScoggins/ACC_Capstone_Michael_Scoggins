import React, { Fragment } from "react";
import Grid from '@material-ui/core/Grid'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import { v4 as uuidv4 } from "uuid";
import { faBong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import PosEffectsChips from '../../containers/chips/PosEffectsChips'
import NegEffectsChips from '../../containers/chips/NegEffectsChips'
import FlavorChips from '../../containers/chips/FlavorChips'
import SpeciesPrefsChips from '../../containers/chips/SpeciesPrefsChips'
import MedicinalChips from '../../containers/chips/MedicinalChips'

export default function Questionnaire(props) {
  const [open, toggleOpen] = React.useState(false);

  const toggleDialog = () => toggleOpen(!open);


  const handleSubmit = (e) => {
    e.preventDefault();
    // const exp = props.preTokeForm;
    // console.log({ exp });
    // exp.id = uuidv4();
    // exp.strain = strain[0];
    // props.preTokeForm.sessionNum = props.preTokeForm.sessionNum + 1;
    // props.addPreExp(exp);
    toggleOpen(false);
    // console.log(props.experiences);
    // clearAll();
  };

  // const clearAll = () => {
  //   props.setPreTokeForm({
  //     mood: "",
  //     worries: "",
  //     goals: "",
  //     alreadyAccomplished: "",
  //     planToAccomplish: "",
  //     describeAppearance: "",
  //   });
  // };

  const handleTextChange = (e) => {
    // const newState = props.preTokeForm;
    // newState[e.target.id] = e.target.value;
    // props.setPreTokeForm(newState);
  };

  return (
    <Container style={{width: 350}}>
      <div style={{ textAlign: "center" }}>
        <Typography>
          <IconButton
            variant="contained"
            className="add-exp"
            onClick={toggleDialog}
          >
            <FontAwesomeIcon icon={faBong} size="3x" className="bong-icon" />
          </IconButton>
        </Typography>
      </div>
          <Dialog open={open} onClose={toggleDialog}>
            <DialogTitle>
              <Typography variant="h5">
                What Are You Looking For?
              </Typography>
            <hr/>
            </DialogTitle>
            <DialogContent>
              <form
                onSubmit={handleSubmit}
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
                
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Find The Perfect Strain
                </Button>
              </form>
            </DialogContent>
          </Dialog>
    </Container>
  );
}
