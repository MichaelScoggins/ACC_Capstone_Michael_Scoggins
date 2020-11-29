import { connect } from "react-redux";
import SpeciesPrefsChips from "../../../components/forms/chips/SpeciesPrefsChips";
import { setSpeciesPrefs } from "../../../redux/actions";

const mapStateToProps = (state) => {
  return {
    speciesPrefs: state.speciesPrefs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSpeciesPrefs: (input) => dispatch(setSpeciesPrefs(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesPrefsChips);
