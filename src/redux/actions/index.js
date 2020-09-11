import axios from "axios";

export const ADD_TO_SHELF = "ADD_TO_SHELF";

export const addToShelf = (book, shelf) => ({
  type: ADD_TO_SHELF,
  payload: {
    book,
    shelf,
  },
});

export const requestAddToShelf = (google_id, shelf) => (dispatch) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes/${google_id}`)
    .then((res) => {
      const normalized = normalizator(res);
      dispatch(addToShelf(normalized, shelf));
    });
};

export const normalizator = ({
  data: {
    id,
    volumeInfo: {
      title,
      authors,
      imageLinks: { smallThumbnail },
      categories,
    },
  },
}) => ({
  title: title,
  author: authors.join(", "),
  image_url: smallThumbnail,
  grade: 0,
  categories: categories.join(", "),
  review: "",
  google_book_id: id,
});
