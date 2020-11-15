import { connect } from "react-redux";
import Loading from "../components/Loading";
import { toggleDrawer } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    allStrains: state.allStrains,
    perfectStrainResults: state.perfectStrainResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: (input) => dispatch(toggleDrawer(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
