import { ADD_TO_SHELF } from "../actions";

const defaultState = {};

const books = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_TO_SHELF:
      const { book, shelf } = payload;
      const id = Object.keys(state).length;
      return { ...state, [id]: { ...book, id, shelf } };

    default:
      return state;
  }
};

export default books;
