import axios from "axios";
import normalizator from "../../../normalizator";
export const ADD_TO_LIST = "ADD_TO_LIST";

export const executeSearch = (adaptedInput, start, max) => (dispatch) => {
  let searchResult = [];

  // const normalizator = ({
  //   id,
  //   volumeInfo: { title, authors, description, imageLinks, categories },
  // }) => ({
  //   title: title,
  //   author: authors.join(", "),
  //   description: description,
  //   image_url: imageLinks.smallThumbnail || imageLinks.thumbnail,
  //   grade: 0,
  //   categories: categories.join(", "),
  //   review: "",
  //   google_book_id: id,
  // });

  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${adaptedInput}&startIndex=${start}&maxResults=${max}`
    )
    .then((res) => res.data)
    .then((res) => {
      const normalized = {};
      res.items.map((item, index) => {
        normalized[item.id] = normalizator(item);
      });
      dispatch(addToList(normalized));
    });
};

const addToList = (searchResult) => ({
  type: ADD_TO_LIST,
  payload: {
    searchResult,
  },
});
