import axios from "axios";

export const GET_USER_BOOKS = " GET_USER_BOOKS";
export const ADD_TO_SHELF = "ADD_TO_SHELF";
export const REMOVE = "REMOVE";

export const requestUserBooks = (token, id) => (dispatch) => {
  axios
    .get(`https://ka-users-api.herokuapp.com/users/${id}/books/`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(({ data }) => {
      const normalized = {};
      data.map((currentBook) => {
        normalized[currentBook.google_book_id] = { ...currentBook };
      });
      dispatch(getUserBooks(normalized));
    })
    .catch((e) => {
      const errorstatus = e.response.status;
      console.log("Erro: ", errorstatus);
    });
};

export const getUserBooks = (userBooks) => ({
  type: GET_USER_BOOKS,
  payload: {
    userBooks,
  },
});
