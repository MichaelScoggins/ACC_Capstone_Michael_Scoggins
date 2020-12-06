import { connect } from "react-redux";
import NavDrawer from "../../components/navigation/NavDrawer";
import {
  toggleDrawer,
  toggleFindPerfectStrain,
  toggleLoading,
  setPerfectStrainResults,
} from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    drawerOpen: state.drawerOpen,
    findPerfectStrainOpen: state.findPerfectStrainOpen,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: (input) => dispatch(toggleDrawer(input)),
    toggleFindPerfectStrain: (input) =>
      dispatch(toggleFindPerfectStrain(input)),
    toggleLoading: (input) => dispatch(toggleLoading(input)),
    setPerfectStrainResults: (results) =>
      dispatch(setPerfectStrainResults(results)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);
