import { connect } from "react-redux";
import SignUp from "../../components/forms/SignUp";
import { addPreExp, setPreTokeForm, setProfile } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    preTokeForm: state.preTokeForm,
    experiences: state.experiences,
    perfectStrainResults: state.perfectStrainResults,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    email: state.profile.email,
    password: state.profile.password,
    city: state.profile.city,
    state: state.profile.state,
    profile: state.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPreExp: (exp) => dispatch(addPreExp(exp)),
    setPreTokeForm: (input) => dispatch(setPreTokeForm(input)),
    setProfile: (input) => dispatch(setProfile(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
