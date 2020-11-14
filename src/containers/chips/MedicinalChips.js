import { connect } from "react-redux";
import MedicinalChips from "../../components/chips/MedicinalChips";
import { setMedPrefs } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    medPrefs: state.medPrefs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMedPrefs: (input) => dispatch(setMedPrefs(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicinalChips);
