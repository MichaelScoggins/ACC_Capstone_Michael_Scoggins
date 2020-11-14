import { connect } from "react-redux";
import RecordPreLog from "../../components/forms/RecordPreLog";
import { addListing } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (business) => dispatch(addListing(business)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordPreLog);
