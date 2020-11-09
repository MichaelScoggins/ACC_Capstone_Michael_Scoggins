import { connect } from "react-redux";
import SearchBy from "../components/SearchBy";
import {
  setUser,
  fetchAllStrains,
  fetchUserSearchResults,
  setSearchParams,
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
    setSearchParams: (searchParams) => dispatch(setSearchParams(searchParams)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBy);
