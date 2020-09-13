import { GET_USER_BOOKS, ADD_TO_SHELF, REMOVE } from "../../actions/user-books";

const defaultState = [];

const userBooks = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_USER_BOOKS:
      const { userBooks } = payload;
      return userBooks;

    case ADD_TO_SHELF:
      // const { googleInfo } = payload;
      // return googleInfo;
      return state;

    case REMOVE:
      // const { googleInfo } = payload;
      // return googleInfo;
      return state;

    default:
      return state;
  }
};

export default userBooks;
