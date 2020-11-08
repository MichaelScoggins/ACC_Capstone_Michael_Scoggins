import { connect } from "react-redux";
import Details from "../components/Details";
import { fetchEffects, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.strains,
    effects: state.effects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEffects: (input) => dispatch(fetchEffects(input)),
    setUser: (username) => dispatch(setUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
