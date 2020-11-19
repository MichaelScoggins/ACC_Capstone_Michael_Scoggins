import { connect } from "react-redux";
import FindPerfectStrain1 from "../components/FindPerfectStrain1";
import {
  setUser,
  fetchAllStrains,
  fetchUserSearchResults,
  setSpeciesPrefs,
  fetchDescription,
  fetchEffects,
  fetchFlavors,
  setUserSearchInput,
  setAvoidPrefs,
  setMedPrefs,
  setFlavPrefs,
  setPosPrefs,
  resetAllStrains,
  toggleFindPerfectStrain,
  setPerfectStrainResults,
} from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userSearchResults: state.userSearchResults,
    allStrains: state.allStrains,
    searchParams: state.searchParams,
    userSearchInput: state.userSearchInput,
    effects: state.effects,
    posPrefs: state.posPrefs,
    avoidPrefs: state.avoidPrefs,
    medPrefs: state.medPrefs,
    flavPrefs: state.flavPrefs,
    speciesPrefs: state.speciesPrefs,
    findPerfectStrainModalOpen: state.findPerfectStrainModalOpen,
    perfectStrainResults: state.perfectStrainResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (username) => dispatch(setUser(username)),
    fetchAllStrains: () => dispatch(fetchAllStrains()),
    fetchUserSearchResults: (input) => dispatch(fetchUserSearchResults(input)),
    setAvoidPrefs: (input) => dispatch(setAvoidPrefs(input)),
    setPosPrefs: (input) => dispatch(setPosPrefs(input)),
    setMedPrefs: (input) => dispatch(setMedPrefs(input)),
    setFlavPrefs: (input) => dispatch(setFlavPrefs(input)),
    setSpeciesPrefs: (input) => dispatch(setSpeciesPrefs(input)),
    setUserSearchInput: (input) => dispatch(setUserSearchInput(input)),
    fetchDescription: (input) => dispatch(fetchDescription(input)),
    fetchEffects: (input) => dispatch(fetchEffects(input)),
    fetchFlavors: (input) => dispatch(fetchFlavors(input)),
    resetAllStrains: (input) => dispatch(resetAllStrains(input)),
    toggleFindPerfectStrain: (input) =>
      dispatch(toggleFindPerfectStrain(input)),
    setPerfectStrainResults: (results) =>
      dispatch(setPerfectStrainResults(results)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPerfectStrain1);
