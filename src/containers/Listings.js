import { connect } from "react-redux";
import Listings from "../components/Listings";
import {
  setUser,
  fetchAllStrains,
  fetchUserSearchResults,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
