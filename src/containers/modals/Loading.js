import { connect } from "react-redux";
import Loading from "../../components/modals/Loading";
import { toggleDrawer, toggleLoading } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    allStrains: state.allStrains,
    perfectStrainResults: state.perfectStrainResults,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: (input) => dispatch(toggleDrawer(input)),
    toggleLoading: (input) => dispatch(toggleLoading(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
