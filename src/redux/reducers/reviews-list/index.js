import { ADD_TO_REVIEWS_LIST } from "../../actions/reviews-list";

const defaultState = [];

const reviewsList = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_TO_REVIEWS_LIST:
      const { booksReviews } = payload;
      return booksReviews;

    default:
      return state;
  }
};

export default reviewsList;
