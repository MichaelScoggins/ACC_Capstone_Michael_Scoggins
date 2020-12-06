import { connect } from "react-redux";
import SignUp from "../../components/forms/SignUp";
import {
  addPreExp,
  setPreTokeForm,
  setProfile,
  setUser,
  addUser,
  storeToken,
} from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bearerToken: state.bearerToken,
    preTokeForm: state.preTokeForm,
    perfectStrainResults: state.perfectStrainResults,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    email: state.profile.email,
    password: state.profile.password,
    city: state.profile.city,
    state: state.profile.state,
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPreExp: (exp) => dispatch(addPreExp(exp)),
    setPreTokeForm: (input) => dispatch(setPreTokeForm(input)),
    setProfile: (input) => dispatch(setProfile(input)),
    addUser: (input) => dispatch(addUser(input)),
    setUser: (input) => dispatch(setUser(input)),
    storeToken: (input) => dispatch(storeToken(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
