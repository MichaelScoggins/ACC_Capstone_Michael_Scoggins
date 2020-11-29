import { connect } from "react-redux";
import NegEffectsChips from "../../../components/forms/chips/NegEffectsChips";
import { setAvoidPrefs } from "../../../redux/actions";

const mapStateToProps = (state) => {
  return {
    avoidPrefs: state.avoidPrefs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAvoidPrefs: (input) => dispatch(setAvoidPrefs(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NegEffectsChips);
