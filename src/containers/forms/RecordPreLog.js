import { connect } from "react-redux";
import RecordPreLog from "../../components/forms/RecordPreLog";
import { addPreExp, setPreTokeForm } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    preTokeForm: state.preTokeForm,
    experiences: state.experiences,
    perfectStrainResults: state.perfectStrainResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPreExp: (exp) => dispatch(addPreExp(exp)),
    setPreTokeForm: (input) => dispatch(setPreTokeForm(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordPreLog);
