import { connect } from "react-redux";
import Navigation from "../../components/navigation/Navigation";
import { toggleDrawer, setUser, storeToken } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    drawerOpen: state.drawerOpen,
    preLogs: state.preLogs,
    reviews: state.reviews,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: (input) => dispatch(toggleDrawer(input)),
    setUser: (username) => dispatch(setUser(username)),
    storeToken: (input) => dispatch(storeToken(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
