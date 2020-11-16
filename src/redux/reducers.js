import { combineReducers } from "redux";

const user = (state = "", action) => {
  switch (action.type) {
    case "USER":
      return action.value;
    default:
      return state;
  }
};

const preTokeForm = (state = {}, action) => {
  switch (action.type) {
    case "SET_MOOD":
      return Object.assign({}, state, {
        mood: action.value,
      });
    case "SET_WORRIES":
      return Object.assign({}, state, {
        worries: action.value,
      });
    case "SET_GOALS":
      return Object.assign({}, state, {
        goals: action.value,
      });
    case "SET_ALREADY_ACCOMPLISHED":
      return Object.assign({}, state, {
        alreadyAccomplished: action.value,
      });
    case "SET_PLAN_TO_ACCOMPLISH":
      return Object.assign({}, state, {
        planToAccomplish: action.value,
      });
    case "SET_DESCRIBE_APPEARANCE":
      return Object.assign({}, state, {
        describeAppearance: action.value,
      });
    default:
      return state;
  }
};

const title = (state = "", action) => {
  switch (action.type) {
    case "SET_TITLE":
      return action.value;
    default:
      return state;
  }
};

const favorites = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.value];
    default:
      return state;
  }
};

const drawerOpen = (state = false, action) => {
  switch (action.type) {
    case "DRAWER_OPEN":
      return action.value;
    default:
      return state;
  }
};

const snackbarOpen = (state = false, action) => {
  switch (action.type) {
    case "SNACKBAR_OPEN":
      return action.value;
    default:
      return state;
  }
};

const findPerfectStrainModalOpen = (state = false, action) => {
  switch (action.type) {
    case "FIND_PERFECT_STRAIN_MODAL_OPEN":
      return action.value;
    default:
      return state;
  }
};

const allStrains = (state = {}, action) => {
  switch (action.type) {
    case "ALL_STRAINS":
      return action.value;
    case "RESET_RESULTS":
      return {};
    default:
      return state;
  }
};

const perfectStrainResults = (state = [], action) => {
  switch (action.type) {
    case "SET_PERFECT_STRAIN_RESULTS":
      return action.value;
    default:
      return state;
  }
};

const userSearchResults = (state = [], action) => {
  switch (action.type) {
    case "USER_SEARCH_RESULTS":
      return action.value;
    default:
      return state;
  }
};

const effects = (state = {}, action) => {
  switch (action.type) {
    case "EFFECTS":
      return action.value;
    default:
      return state;
  }
};

const flavors = (state = [], action) => {
  switch (action.type) {
    case "FLAVORS":
      return action.value;
    default:
      return state;
  }
};

const searchParams = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_PARAMS":
      return action.value;
    default:
      return state;
  }
};

const userSearchInput = (state = "", action) => {
  switch (action.type) {
    case "USER_INPUT":
      return action.value;
    default:
      return state;
  }
};

const posPrefs = (state = [], action) => {
  switch (action.type) {
    case "POS_PREFS":
      return action.value;
    default:
      return state;
  }
};

const avoidPrefs = (state = [], action) => {
  switch (action.type) {
    case "AVOID_PREFS":
      return action.value;
    default:
      return state;
  }
};

const medPrefs = (state = [], action) => {
  switch (action.type) {
    case "MED_PREFS":
      return action.value;
    default:
      return state;
  }
};

const flavPrefs = (state = [], action) => {
  switch (action.type) {
    case "FLAV_PREFS":
      return action.value;
    default:
      return state;
  }
};

const speciesPrefs = (state = [], action) => {
  switch (action.type) {
    case "SPECIES_PREFS":
      return action.value;
    default:
      return state;
  }
};

const strainDescription = (state = "", action) => {
  switch (action.type) {
    case "STRAIN_DESCRIPTION":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  allStrains,
  userSearchResults,
  effects,
  flavors,
  searchParams,
  userSearchInput,
  posPrefs,
  avoidPrefs,
  medPrefs,
  flavPrefs,
  speciesPrefs,
  strainDescription,
  drawerOpen,
  findPerfectStrainModalOpen,
  favorites,
  snackbarOpen,
  perfectStrainResults,
  title,
  preTokeForm,
});
