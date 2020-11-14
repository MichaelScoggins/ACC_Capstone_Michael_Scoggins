import { connect } from "react-redux";
import NavDrawer from "../components/NavDrawer";
import { toggleDrawer, toggleFindPerfectStrain } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    drawerOpen: state.drawerOpen,
    findPerfectStrainOpen: state.findPerfectStrainOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: (input) => dispatch(toggleDrawer(input)),
    toggleFindPerfectStrain: (input) =>
      dispatch(toggleFindPerfectStrain(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);
