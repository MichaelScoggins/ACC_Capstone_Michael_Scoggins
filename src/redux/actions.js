export const setUser = (username) => {
  return {
    type: "USER",
    value: username,
  };
};

export const addListing = (business) => {
  return async (dispatch) => {
    await fetch(
      `https://maps.google.com/maps/api/geocode/json?key=AIzaSyDO4_O1UDOeMQ9P5CvydjO_Rmv8yFdMV2E&address=${business.address}`
    )
      .then((res) => res.json())
      .then((response) => {
        business.lat = response.results[0].geometry.location.lat;
        business.lng = response.results[0].geometry.location.lng;
        const action = {
          type: "ADD_LISTING",
          value: business,
        };
        dispatch(action);
      });
  };
};

export const fetchAllStrains = () => {
  return async (dispatch) => {
    await fetch(`https://strainapi.evanbusse.com/jXftQqp/strains/search/all`)
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "ALL_STRAINS",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const fetchUserSearchResults = (input) => {
  return async (dispatch) => {
    await fetch(
      `https://strainapi.evanbusse.com/jXftQqp/strains/search/name/${input}`
    )
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "USER_SEARCH_RESULTS",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const fetchEffects = (input) => {
  return async (dispatch) => {
    await fetch(
      `https://strainapi.evanbusse.com/jXftQqp/strains/data/effects/${input}`
    )
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "EFFECTS",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const fetchFlavors = (input) => {
  return async (dispatch) => {
    await fetch(
      `https://strainapi.evanbusse.com/jXftQqp/strains/data/flavors/${input}`
    )
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "FLAVORS",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const fetchDescription = (input) => {
  return async (dispatch) => {
    await fetch(
      `https://strainapi.evanbusse.com/jXftQqp/strains/data/desc/${input}`
    )
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "STRAIN_DESCRIPTION",
          value: response.desc,
        };
        dispatch(action);
      });
  };
};

export const removeListing = (id) => {
  return {
    type: "REMOVE_LISTING",
    value: id,
  };
};

export const setSearchParams = (searchParams) => {
  return {
    type: "SEARCH_PARAMS",
    value: searchParams,
  };
};

export const setUserSearchInput = (input) => {
  return {
    type: "USER_INPUT",
    value: input,
  };
};

export const setPosPrefs = (input) => {
  return {
    type: "POS_PREFS",
    value: input,
  };
};

export const setAvoidPrefs = (input) => {
  return {
    type: "AVOID_PREFS",
    value: input,
  };
};

export const setMedPrefs = (input) => {
  return {
    type: "MED_PREFS",
    value: input,
  };
};

export const setFlavPrefs = (input) => {
  return {
    type: "FLAV_PREFS",
    value: input,
  };
};

export const setSpeciesPrefs = (input) => {
  return {
    type: "SPECIES_PREFS",
    value: input,
  };
};
