import { connect } from "react-redux";
import RecordPreLog from "../../components/forms/RecordPreLog";
import {
  addPreExp,
  setMood,
  setWorries,
  setGoals,
  setAlreadyAccomplished,
  setPlanToAccomplish,
  setDescribeAppearance,
} from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    preTokeForm: state.preTokeForm,
    experiences: state.experiences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPreExp: (exp) => dispatch(addPreExp(exp)),
    setMood: (input) => dispatch(setMood(input)),
    setWorries: (input) => dispatch(setWorries(input)),
    setGoals: (input) => dispatch(setGoals(input)),
    setAlreadyAccomplished: (input) => dispatch(setAlreadyAccomplished(input)),
    setPlanToAccomplish: (input) => dispatch(setPlanToAccomplish(input)),
    setDescribeAppearance: (input) => dispatch(setDescribeAppearance(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordPreLog);
