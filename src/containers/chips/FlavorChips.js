import { connect } from "react-redux";
import FlavorChips from "../../components/chips/FlavorChips";
import { setFlavPrefs } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    flavPrefs: state.flavPrefs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFlavPrefs: (input) => dispatch(setFlavPrefs(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlavorChips);
