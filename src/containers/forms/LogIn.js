import { connect } from "react-redux";
import LogIn from "../../components/forms/LogIn";
import {
  removeListing,
  setUser,
  fetchToken,
  addPreExp,
  addPreExps,
  addReview,
} from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bearerToken: state.bearerToken,
    experiences: state.experiences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (id) => dispatch(removeListing(id)),
    setUser: (username) => dispatch(setUser(username)),
    fetchToken: (input) => dispatch(fetchToken(input)),
    addPreExp: (exp) => dispatch(addPreExp(exp)),
    addPreExps: (exp) => dispatch(addPreExps(exp)),
    addReview: (exp) => dispatch(addReview(exp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
