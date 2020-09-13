import {
  GET_USER_BOOKS,
  ADD_TO_SHELF,
  REMOVE_OF_SHELF,
  CHANGE_BOOK_DATA,
} from "../../actions/user-books";

const defaultState = [];

const userBooks = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_USER_BOOKS:
      const { userBooks } = payload;
      return userBooks;

    case ADD_TO_SHELF:
      return state;

    case REMOVE_OF_SHELF:
      return state;

    case CHANGE_BOOK_DATA:
      return state;

    default:
      return state;
  }
};

export default userBooks;
