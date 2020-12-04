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
  addFavorites,
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
    addFavorites: (favs) => dispatch(addFavorites(favs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
