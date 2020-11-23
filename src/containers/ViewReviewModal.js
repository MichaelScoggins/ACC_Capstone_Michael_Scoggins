import { connect } from "react-redux";
import ViewReviewModal from "../components/ViewReviewModal";
import { addPreExp, setPreTokeForm } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    preTokeForm: state.preTokeForm,
    reviewForm: state.reviewForm,
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewReviewModal);
