import { GET_USER_BOOKS_BY_ID } from "../../actions/user-books";

const defaultState = [];

const userBooksById = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_USER_BOOKS_BY_ID:
      const { userBooksById } = payload;
      return userBooksById;

    default:
      return state;
  }
};

export default userBooksById;
