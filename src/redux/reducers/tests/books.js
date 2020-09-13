import { ADD_TO_SHELF } from "../../actions/tests";
import normalizator from "../../../normalizator";

const defaultState = {};

const books = (state = defaultState, { type, payload }) => {
  // switch (type) {
  //   case ADD_TO_SHELF:
  //     const { book, shelf } = payload;
  //     const id = Object.keys(state).length;
  //     return { ...state, [id]: { ...normalizator(book), id, shelf, grade: 0 } };
  //   default:
  //     return state;
  // }
};

export default books;
