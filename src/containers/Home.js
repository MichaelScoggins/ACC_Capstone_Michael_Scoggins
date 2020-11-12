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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
