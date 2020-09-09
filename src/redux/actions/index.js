import { ADD_TO_SHELF } from "./action-types";
import axios from "axios";

export const addToShelf = (book) => ({
  type: ADD_TO_SHELF,
  variavel: {
    book,
  },
});

export const requestAddToShelf = (google_id, shelf) => (dispatch) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes/${google_id}`).then(
    ({
      data: {
        id,
        volumeInfo: {
          title,
          authors,
          imageLinks: { smallThumbnail },
          categories,
        },
      },
    }) => {
      const obj = {
        title: title,
        author: authors.join(","),
        shelf,
        image_url: smallThumbnail,
        grade: 0,
        categories: categories.join(","),
        review: "",
        google_book_id: id,
      };
      console.log(obj);
        dispatch(addToShelf(obj));
    }
  );
};
