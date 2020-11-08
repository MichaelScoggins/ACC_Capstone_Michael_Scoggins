import { combineReducers } from "redux";

const strains = (state = [], action) => {
  switch (action.type) {
    case "FETCH_LISTINGS":
      return action.value;
    case "ADD_LISTING":
      return [...state, action.value];
    case "REMOVE_LISTING":
      return [...state.filter((strain) => strain.id !== action.value)];
    default:
      return state;
  }
};

const effects = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_EFFECTS":
      return action.value;
    default:
      return state;
  }
};

const flavors = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FLAVORS":
      return action.value;
    default:
      return state;
  }
};

const user = (state = "", action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ strains, effects, flavors, user });
