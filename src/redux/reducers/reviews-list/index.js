import {
  ADD_TO_REVIEWS_LIST,
  ADD_GOOGLE_INFO,
} from "../../actions/reviews-list";

const defaultState = [];

const reviewsList = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_TO_REVIEWS_LIST:
      const { booksReviews } = payload;
      return booksReviews;

    case ADD_GOOGLE_INFO:
      const { googleInfo } = payload;
      return googleInfo;

    default:
      return state;
  }
};

export default reviewsList;
