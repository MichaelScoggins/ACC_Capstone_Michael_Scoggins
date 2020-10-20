export const addListing = (business) => {
  return {
    type: "ADD_LISTING",
    value: business,
  };
};

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index,
  };
};

export const fetchCoordinates = () => {
  return async (dispatch) => {
    await fetch(
      `https://maps.google.com/maps/api/geocode/json?key=<AIzaSyDO4_O1UDOeMQ9P5CvydjO_Rmv8yFdMV2E>&address=1600+Amphitheatre+Parkway,+Mountain+View,+CA`
    )
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "FETCH_COORDINATES",
          value: [response.lat, response.lng],
        };
        dispatch(action);
      });
  };
};
