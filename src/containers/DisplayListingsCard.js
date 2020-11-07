import { connect } from "react-redux";
import DisplayListingsCard from "../components/DisplayListingsCard";
import { fetchListings, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.strains,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListings: (input) => dispatch(fetchListings(input)),
    setUser: (username) => dispatch(setUser(username)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayListingsCard);
