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
  populatePrefs,
  setAvoidPrefs,
  setMedPrefs,
  setFlavPrefs,
  setPosPrefs,
  setSpeciesPrefs,
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
    populatePrefs: (prefsObj) => dispatch(populatePrefs(prefsObj)),
    setAvoidPrefs: (input) => dispatch(setAvoidPrefs(input)),
    setPosPrefs: (input) => dispatch(setPosPrefs(input)),
    setMedPrefs: (input) => dispatch(setMedPrefs(input)),
    setFlavPrefs: (input) => dispatch(setFlavPrefs(input)),
    setSpeciesPrefs: (input) => dispatch(setSpeciesPrefs(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
