import { connect } from "react-redux";
import Navigation from "../../components/navigation/Navigation";
import { toggleDrawer } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    drawerOpen: state.drawerOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: (input) => dispatch(toggleDrawer(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
