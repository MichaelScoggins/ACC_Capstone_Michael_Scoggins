export const setUser = (username) => {
  return {
    type: "USER",
    value: username,
  };
};

// export const setPreTokeForm = (input) => {
//   return {
//     type: "SET_PRE_TOKE",
//     value: input,
//   };
// };

export const setMood = (input) => {
  return {
    type: "SET_MOOD",
    value: input,
  };
};

export const setWorries = (input) => {
  return {
    type: "SET_WORRIES",
    value: input,
  };
};

export const setGoals = (input) => {
  return {
    type: "SET_GOALS",
    value: input,
  };
};

export const setAlreadyAccomplished = (input) => {
  return {
    type: "SET_ALREADY_ACCOMPLISHED",
    value: input,
  };
};

export const setPlanToAccomplish = (input) => {
  return {
    type: "SET_PLAN_TO_ACCOMPLISH",
    value: input,
  };
};

export const setDescribeAppearance = (input) => {
  return {
    type: "SET_DESCRIBE_APPEARANCE",
    value: input,
  };
};

export const addPreExp = (exp) => {
  return {
    type: "ADD_PRE_EXP",
    value: exp,
  };
};

export const setTitle = (input) => {
  return {
    type: "SET_TITLE",
    value: input,
  };
};

export const toggleDrawer = (input) => {
  return {
    type: "DRAWER_OPEN",
    value: input,
  };
};

export const toggleSnackbar = (input) => {
  return {
    type: "SNACKBAR_OPEN",
    value: input,
  };
};

export const toggleFindPerfectStrain = (input) => {
  return {
    type: "FIND_PERFECT_STRAIN_MODAL_OPEN",
    value: input,
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

export const setPerfectStrainResults = (results) => {
  return {
    type: "SET_PERFECT_STRAIN_RESULTS",
    value: results,
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

export const addFavorite = (id) => {
  return {
    type: "ADD_FAVORITE",
    value: id,
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

export const resetAllStrains = (input) => {
  return {
    type: "RESET_RESULTS",
    value: input,
  };
};
