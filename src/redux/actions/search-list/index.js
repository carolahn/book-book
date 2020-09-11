import axios from "axios";
export const ADD_TO_LIST = "ADD_TO_LIST";
// import {normalizator} from '../index';

export const executeSearch = (adaptedInput, start, max) => (dispatch) => {
  let searchResult = [];

  const normalizator = ({
    id,
    volumeInfo: { title, authors, description, imageLinks, categories },
  }) => ({
    title: title,
    author: authors.join(", "),
    description: description,
    image_url: imageLinks.smallThumbnail || imageLinks.thumbnail,
    grade: 0,
    categories: categories.join(", "),
    review: "",
    google_book_id: id,
  });

  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${adaptedInput}&startIndex=${start}&maxResults=${max}`
    )
    .then((res) => res.data)
    .then((res) => {
      searchResult = res.items.map((item, index) => {
        return normalizator(item);
      });
      dispatch(addToList(searchResult));
    });
};

const addToList = (searchResult) => ({
  type: ADD_TO_LIST,
  payload: {
    searchResult,
  },
});
