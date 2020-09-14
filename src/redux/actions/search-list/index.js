import axios from "axios";
import normalizator from "../../../normalizator";

export const ADD_TO_LIST = "ADD_TO_LIST";
export const CLEAR_LIST = "CLEAR_LIST";

export const executeSearch = (adaptedInput, max) => (dispatch) => {
  let urlRequests = [];

  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${adaptedInput}`)
    .then((res) => res.data)
    .then((res) => {
      return res.totalItems;
    })
    .then((totalBooks) => {
      const apiPages = Math.ceil(totalBooks / max);
      for (let i = 0; i < apiPages; i++) {
        let start = (i + 1) * max - max;
        urlRequests.push(
          `https://www.googleapis.com/books/v1/volumes?q=${adaptedInput}&startIndex=${start}&maxResults=${max}`
        );
      }

      if (urlRequests) {
        let promises = [];
        urlRequests.forEach((item, index) => {
          promises.push(axios.get(item));
        });
        axios
          .all(promises)
          .then((res) => {
            const dataT = res.map((item, index) => {
              return item.data.items;
            });
            return dataT.flat();
          })
          .then((res) => {
            const normalized = {};
            res.map((item, index) => {
              if (item) {
                normalized[item.id] = normalizator(item);
              }
            });
            dispatch(addToList(normalized));
          });
      }
    });
};

const addToList = (searchResult) => ({
  type: ADD_TO_LIST,
  payload: {
    searchResult,
  },
});

export const clearList = () => ({
  type: CLEAR_LIST,
});
