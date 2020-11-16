import { connect } from "react-redux";
import PerfectStrainDescriptionCard from "../components/PerfectStrainDescriptionCard";
import {
  setUser,
  fetchAllStrains,
  fetchUserSearchResults,
  fetchEffects,
  fetchFlavors,
  fetchDescription,
} from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userSearchResults: state.userSearchResults,
    allStrains: state.allStrains,
    searchParams: state.searchParams,
    effects: state.effects,
    flavors: state.flavors,
    posPrefs: state.posPrefs,
    avoidPrefs: state.avoidPrefs,
    medPrefs: state.medPrefs,
    flavPrefs: state.flavPrefs,
    speciesPrefs: state.speciesPrefs,
    strainDescription: state.strainDescription,
    perfectStrainResults: state.perfectStrainResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (username) => dispatch(setUser(username)),
    fetchAllStrains: () => dispatch(fetchAllStrains()),
    fetchUserSearchResults: (input) => dispatch(fetchUserSearchResults(input)),
    fetchEffects: (input) => dispatch(fetchEffects(input)),
    fetchFlavors: (input) => dispatch(fetchFlavors(input)),
    fetchDescription: (input) => dispatch(fetchDescription(input)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PerfectStrainDescriptionCard);
