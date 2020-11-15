import { connect } from "react-redux";
import FavAddedSnackbar from "../components/FavAddedSnackbar";
import { toggleSnackbar } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    allStrains: state.allStrains,
    snackbarOpen: state.snackbarOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSnackbar: (input) => dispatch(toggleSnackbar(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavAddedSnackbar);
