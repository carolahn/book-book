import axios from "axios";

export const ADD_TO_REVIEWS_LIST = "ADD_TO_REVIEWS_LIST";
export const ADD_GOOGLE_INFO = "ADD_GOOGLE_INFO";
export const ADD_TO_MOST_POPULAR = "ADD_TO_MOST_POPULAR";

export const requestReviews = (token) => (dispatch) => {
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
    })
    .catch((e) => {
      const errorstatus = e.response.status;
      console.log("Erro: ", errorstatus); //RETIRAR DEPOIS
    });
};

const addToReviewsList = (booksReviews) => ({
  type: ADD_TO_REVIEWS_LIST,
  payload: {
    booksReviews,
  },
});

export const requestGoogleInfo = (booksReviews, page) => (dispatch) => {
  let urlRequests = [];
  let booksDescriptions = [];

  Object.keys(booksReviews)
    .slice(page * 10 - 10, page * 10)
    .map((key) => {
      if (isNaN(key)) {
        urlRequests.push(`https://www.googleapis.com/books/v1/volumes/${key}`);
      }
    });

  if (urlRequests) {
    let promises = [];
    urlRequests.forEach((item, index) => {
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

export const addToMostPopular = (mostPopular) => ({
  type: ADD_TO_MOST_POPULAR,
  payload: {
    mostPopular,
  },
});
