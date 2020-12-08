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
    user: state.user,
    bearerToken: state.bearerToken,
    preTokeForm: state.preTokeForm,
    perfectStrainResults: state.perfectStrainResults,
    reviewForm: state.reviewForm,
    reviews: state.reviews,
    preLogs: state.preLogs,
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
