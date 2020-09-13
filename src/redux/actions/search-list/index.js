import axios from "axios";
import normalizator from "../../../normalizator";
export const ADD_TO_LIST = "ADD_TO_LIST";

export const executeSearch = (adaptedInput, max) => (dispatch) => {
  let urlRequests = [];

  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${adaptedInput}`)
    .then((res) => res.data)
    .then((res) => {
      return res.totalItems;
    })
    .then((totalBooks) => {
      console.log("totalBooks", totalBooks);
      const apiPages = Math.ceil(totalBooks / max);
      console.log("pages", apiPages);
      for (let i = 0; i < apiPages; i++) {
        let start = (i + 1) * max - max;
        urlRequests.push(
          `https://www.googleapis.com/books/v1/volumes?q=${adaptedInput}&startIndex=${start}&maxResults=${max}`
        );
        console.log(urlRequests);
      }

      if (urlRequests) {
        let promises = [];
        urlRequests.forEach((item, index) => {
          promises.push(axios.get(item));
        });
        axios
          .all(promises)
          .then((res) => {
            console.log(res);
            const dataT = res.map((item, index) => {
              return item.data.items;
            });
            console.log("dataT", dataT.flat());
            return dataT.flat();
          })
          .then((res) => {
            console.log("res", res);
            const normalized = {};
            res.map((item, index) => {
              if (item) {
                normalized[item.id] = normalizator(item);
              }
            });
            console.log("normalized", normalized);
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
