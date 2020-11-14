import { connect } from "react-redux";
import PosEffectsChips from "../../components/chips/PosEffectsChips";
import { setPosPrefs } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    posPrefs: state.posPrefs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPosPrefs: (input) => dispatch(setPosPrefs(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PosEffectsChips);
