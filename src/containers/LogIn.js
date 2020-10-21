import { connect } from "react-redux";
import LogIn from "../components/LogIn";
import { removeListing, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (id) => dispatch(removeListing(id)),
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
