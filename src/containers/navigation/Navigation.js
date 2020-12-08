import { connect } from "react-redux";
import Navigation from "../../components/navigation/Navigation";
import {
  toggleDrawer,
  setUser,
  storeToken,
  clearPreLogs,
  clearReviews,
  clearFavorites,
} from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    drawerOpen: state.drawerOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: (input) => dispatch(toggleDrawer(input)),
    setUser: (username) => dispatch(setUser(username)),
    clearPreLogs: (input) => dispatch(clearPreLogs(input)),
    clearReviews: (input) => dispatch(clearReviews(input)),
    clearFavorites: (input) => dispatch(clearFavorites(input)),
    storeToken: (input) => dispatch(storeToken(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
