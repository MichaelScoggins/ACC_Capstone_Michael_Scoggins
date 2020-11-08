import { connect } from "react-redux";
import Details from "../components/Details";
import { fetchEffects, fetchFlavors, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.strains,
    effects: state.effects,
    flavors: state.flavors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEffects: (input) => dispatch(fetchEffects(input)),
    fetchFlavors: (input) => dispatch(fetchFlavors(input)),
    setUser: (username) => dispatch(setUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
