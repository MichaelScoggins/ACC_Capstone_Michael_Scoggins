import { combineReducers } from "redux";

const user = (state = "", action) => {
  switch (action.type) {
    case "USER":
      return action.value;
    default:
      return state;
  }
};

const allStrains = (state = {}, action) => {
  switch (action.type) {
    case "ALL_STRAINS":
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

export default combineReducers({
  user,
  allStrains,
  userSearchResults,
  effects,
  flavors,
  searchParams,
  userSearchInput,
});
