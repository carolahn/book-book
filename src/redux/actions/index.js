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

const normalizator = ({
  id,
  volumeInfo: { title, authors, imageLinks, categories },
}) => ({
  title: title ? title : "No title!",
  author: authors ? authors.join(", ") : "No author!",
  image_url: imageLinks ? (imageLinks.smallThumbnail || imageLinks.thumbnail) : "",
  categories: categories ? categories.join(", ") : "No categories!",
  google_book_id: id,
});
