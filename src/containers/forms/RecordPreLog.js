import { connect } from "react-redux";
import RecordPreLog from "../../components/forms/RecordPreLog";
import { setPreTokeForm } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    preTokeForm: state.preTokeForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addPreExp: (strain) => dispatch(addPreExp(strain)),
    setPreTokeForm: (input) => dispatch(setPreTokeForm(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordPreLog);
