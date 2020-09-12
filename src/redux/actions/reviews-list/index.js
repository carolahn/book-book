import axios from "axios";
import { useSelector } from "react-redux";

export const ADD_TO_REVIEWS_LIST = "ADD_TO_REVIEWS_LIST";

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
        normalized[currReview.id] = { ...currReview };
      });
      // setBooksReviews(normalized);
      console.log("passou");
      dispatch(addToReviewsList(normalized));
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
