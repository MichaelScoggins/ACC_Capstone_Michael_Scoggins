import { connect } from "react-redux";
import RecordPreLog from "../../components/forms/RecordPreLog";
import {
  addPreExp,
  setPreTokeForm,
  fetchAllStrains,
} from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bearerToken: state.bearerToken,
    preTokeForm: state.preTokeForm,
    experiences: state.experiences,
    perfectStrainResults: state.perfectStrainResults,
    allStrains: state.allStrains,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPreExp: (exp) => dispatch(addPreExp(exp)),
    setPreTokeForm: (input) => dispatch(setPreTokeForm(input)),
    fetchAllStrains: (input) => dispatch(fetchAllStrains(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordPreLog);
