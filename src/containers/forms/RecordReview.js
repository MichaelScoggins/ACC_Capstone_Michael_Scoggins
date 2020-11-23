import { connect } from "react-redux";
import RecordReview from "../../components/forms/RecordReview";
import {
  addPreExp,
  setPreTokeForm,
  setReviewForm,
  addReview,
} from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    preTokeForm: state.preTokeForm,
    experiences: state.experiences,
    perfectStrainResults: state.perfectStrainResults,
    reviewForm: state.reviewForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPreTokeForm: (input) => dispatch(setPreTokeForm(input)),
    setReviewForm: (input) => dispatch(setReviewForm(input)),
    addPreExp: (exp) => dispatch(addPreExp(exp)),
    addReview: (exp) => dispatch(addReview(exp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordReview);
