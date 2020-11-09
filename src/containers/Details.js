import { connect } from "react-redux";
import Details from "../components/Details";
import {
  setUser,
  fetchAllStrains,
  fetchUserSearchResults,
  fetchEffects,
  fetchFlavors,
} from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userSearchResults: state.userSearchResults,
    allStrains: state.allStrains,
    searchParams: state.searchParams,
    effects: state.effects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (username) => dispatch(setUser(username)),
    fetchAllStrains: () => dispatch(fetchAllStrains()),
    fetchUserSearchResults: (input) => dispatch(fetchUserSearchResults(input)),
    fetchEffects: (input) => dispatch(fetchEffects(input)),
    fetchFlavors: (input) => dispatch(fetchFlavors(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
