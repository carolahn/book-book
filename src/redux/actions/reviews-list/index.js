import axios from "axios";
import { useSelector } from "react-redux";
import normalizator from "../../../normalizator";

export const ADD_TO_REVIEWS_LIST = "ADD_TO_REVIEWS_LIST";
export const ADD_GOOGLE_INFO = "ADD_GOOGLE_INFO";

export const requestReviews = (token) => (dispatch) => {
  // const token = useSelector((state) => state.login.token);

  axios
    .get("https://ka-users-api.herokuapp.com/book_reviews", {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(({ data }) => {
      const normalized = {};
      data.map((currReview) => {
        normalized[currReview.google_book_id] = { ...currReview };
      });
      dispatch(addToReviewsList(normalized));
      dispatch(requestGoogleInfo(normalized));
    })
    .catch((e) => {
      const errorstatus = e.response.status;
      console.log("Erro: ", errorstatus);
    });
};

const addToReviewsList = (booksReviews) => ({
  type: ADD_TO_REVIEWS_LIST,
  payload: {
    booksReviews,
  },
});

export const requestGoogleInfo = (booksReviews) => (dispatch) => {
  let urlRequests = [];
  let booksDescriptions = [];

  Object.keys(booksReviews).map((key) => {
    if (isNaN(key)) {
      urlRequests.push(`https://www.googleapis.com/books/v1/volumes/${key}`);
    }
  });

  if (urlRequests) {
    console.log(urlRequests);
    let promises = [];
    urlRequests.slice(0, 50).forEach((item, index) => {
      promises.push(axios.get(item));
    });
    axios
      .all(promises)
      .then((res) => {
        res.map((item, index) => {
          booksDescriptions[item.data.id] = item.data.volumeInfo.description;
        });
        return booksDescriptions;
      })
      .then((res) => {
        dispatch(addGoogleInfo(res));
      });
  }
};

const addGoogleInfo = (googleInfo) => ({
  type: ADD_GOOGLE_INFO,
  payload: {
    googleInfo,
  },
});
