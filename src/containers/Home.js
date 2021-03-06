import { connect } from "react-redux";
import Home from "../components/Home";
import {
  setUser,
  fetchAllStrains,
  fetchUserSearchResults,
  setSpeciesPrefs,
  fetchDescription,
  fetchEffects,
  fetchFlavors,
  setUserSearchInput,
  addFavorite,
  toggleSnackbar,
  setPerfectStrainResults,
  toggleFindPerfectStrain,
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
    favorites: state.favorites,
    toggleSnackbar: state.toggleSnackbar,
    perfectStrainResults: state.perfectStrainResults,
    bearerToken: state.bearerToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (username) => dispatch(setUser(username)),
    fetchAllStrains: () => dispatch(fetchAllStrains()),
    fetchUserSearchResults: (input) => dispatch(fetchUserSearchResults(input)),
    setUserSearchInput: (input) => dispatch(setUserSearchInput(input)),
    setSpeciesPrefs: (input) => dispatch(setSpeciesPrefs(input)),
    fetchDescription: (input) => dispatch(fetchDescription(input)),
    fetchEffects: (input) => dispatch(fetchEffects(input)),
    fetchFlavors: (input) => dispatch(fetchFlavors(input)),
    addFavorite: (input) => dispatch(addFavorite(input)),
    toggleSnackbar: (input) => dispatch(toggleSnackbar(input)),
    setPerfectStrainResults: (results) =>
      dispatch(setPerfectStrainResults(results)),
    toggleFindPerfectStrain: (input) =>
      dispatch(toggleFindPerfectStrain(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
