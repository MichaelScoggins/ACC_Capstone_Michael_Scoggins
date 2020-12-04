import { connect } from "react-redux";
import LogIn from "../../components/forms/LogIn";
import {
  removeListing,
  setUser,
  fetchToken,
  addPreExp,
  addPreExps,
  addReview,
  addReviews,
} from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bearerToken: state.bearerToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (id) => dispatch(removeListing(id)),
    setUser: (username) => dispatch(setUser(username)),
    fetchToken: (input) => dispatch(fetchToken(input)),
    addPreExp: (exp) => dispatch(addPreExp(exp)),
    addPreExps: (exps) => dispatch(addPreExps(exps)),
    addReview: (exp) => dispatch(addReview(exp)),
    addReviews: (exps) => dispatch(addReviews(exps)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
