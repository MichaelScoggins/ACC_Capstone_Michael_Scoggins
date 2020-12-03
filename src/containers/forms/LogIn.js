import { connect } from "react-redux";
import LogIn from "../../components/forms/LogIn";
import { removeListing, setUser, fetchToken } from "../../redux/actions";

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
