import { connect } from "react-redux";
import LogIn from "../components/LogIn";
import { removeListing, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (id) => dispatch(removeListing(id)),
    setUser: (username) => dispatch(setUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
