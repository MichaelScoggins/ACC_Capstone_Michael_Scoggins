import { connect } from "react-redux";
import PosEffectsChips from "../components/PosEffectsChips";
import { setPosPrefs } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    posEffects: state.posEffects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPosPrefs: (input) => dispatch(setPosPrefs(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PosEffectsChips);
