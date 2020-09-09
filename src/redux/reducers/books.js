import { ADD_TO_SHELF } from "../actions/action-types";

const defaultState = {};

const books = (state = defaultState, { type, variavel }) => {
  switch (type) {
    case ADD_TO_SHELF:
      return { ...state, [state.length - 1]: variavel.book};
    /* cases for the switch */

    default:
      return state;
  }
};

export default books;
