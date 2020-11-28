import { connect } from "react-redux";
import SnackbarAddFav from "../../components/modals/SnackbarAddFav";
import { toggleSnackbar } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    allStrains: state.allStrains,
    snackbarOpen: state.snackbarOpen,
    perfectStrainResults: state.perfectStrainResults,
    title: state.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSnackbar: (input) => dispatch(toggleSnackbar(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarAddFav);
