import { combineReducers } from "redux";

const user = (state = "", action) => {
  switch (action.type) {
    case "USER":
      return action.value;
    default:
      return state;
  }
};

const bearerToken = (state = "", action) => {
  switch (action.type) {
    case "BEARER_TOKEN":
      return action.value;
    default:
      return state;
  }
};

const checkUser = (state = "", action) => {
  switch (action.type) {
    case "AUTH_LOGIN":
      return action.value;
    default:
      return state;
  }
};

const preTokeForm = (state = {}, action) => {
  switch (action.type) {
    case "SET_PRE_TOKE":
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
};

const reviewForm = (state = {}, action) => {
  switch (action.type) {
    case "SET_REVIEW":
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
};

const profile = (state = {}, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
};

const experiences = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRE_EXP":
      let newPreExpState = Object.assign({}, state, action.value);
      newPreExpState.preLogs = [...newPreExpState.preLogs, action.value];
      return newPreExpState;
    case "ADD_REVIEW":
      let newReviewState = Object.assign({}, state, action.value);
      newReviewState.reviews = [...newReviewState.reviews, action.value];
      return newReviewState;
    default:
      return state;
  }
};

const preLogs = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRE_EXP":
      return [...state, action.value];
    case "ADD_PRE_EXPS":
      let newState = [...state, action.value];
      return newState.flat();
    default:
      return state;
  }
};

const reviews = (state = [], action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.value];
    case "ADD_REVIEWS":
      let newState = [...state, action.value];
      return newState.flat();
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
    case "REMOVE_FAVORITE":
      return [...state.filter((x) => x.strainId !== action.value)];
    case "ADD_FAVORITES":
      let newState = [...state, action.value];
      return newState.flat();
    default:
      return state;
  }
};

const userPrefsObj = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER_PREFS":
      return Object.assign({}, state, action.value);
    case "POPULATE_USER_PREFS":
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
};

const favStrainObj = (state = {}, action) => {
  switch (action.type) {
    case "SET_FAV":
      return Object.assign({}, state, action.value);
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

const isLoading = (state = false, action) => {
  switch (action.type) {
    case "IS_LOADING":
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
  experiences,
  profile,
  reviewForm,
  isLoading,
  bearerToken,
  checkUser,
  preLogs,
  reviews,
  favStrainObj,
  userPrefsObj,
});
