import axios from "axios";

export const ADD_TO_SHELF = "ADD_TO_SHELF";

export const addToShelf = (book, shelf) => ({
  type: ADD_TO_SHELF,
  payload: {
    book,
    shelf,
  },
});

export const requestAddToShelf = (google_id, shelf = 1) => (dispatch) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes/${google_id}`)
    .then((res) => {
      dispatch(addToShelf(res, shelf));
    });
};
