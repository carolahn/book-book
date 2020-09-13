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

// export const requestGoogleInfo = (booksReviews) => (dispatch) => {
//   Object.keys(booksReviews).map((key) => {
//     if (isNaN(key)) {
//       axios
//         .get(`https://www.googleapis.com/books/v1/volumes/${key}`)
//         .then((res) => res.data)
//         .then((res) => {
//           const normalized = {};
//           res.items.map((item, index) => {
//             normalized[item.id] = normalizator(item);
//           });
//           dispatch(addGoogleInfo(normalized));
//         })
//         .catch((e) => {
//           const errorstatus = e.response.status;
//           console.log("Erro: ", errorstatus);
//         });
//     }
//   });

// };
// https://www.googleapis.com/books/v1/volumes?q=+intitle:${bookTitle}
// const addGoogleInfo = (googleInfo) => ({
//   type: ADD_GOOGLE_INFO,
//   payload: {
//     googleInfo,
//   },
// });
