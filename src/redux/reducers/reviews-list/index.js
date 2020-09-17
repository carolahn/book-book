import {
  ADD_TO_REVIEWS_LIST,
  ADD_GOOGLE_INFO,
  ADD_TO_MOST_POPULAR,
} from "../../actions/reviews-list";

const defaultState = { booksReviews: {} };

const reviewsList = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_TO_REVIEWS_LIST:
      const { booksReviews, booksReviewsById } = payload; //adicionei
      return { ...state, booksReviews, booksReviewsById };

    case ADD_GOOGLE_INFO:
      const { googleInfo } = payload;
      return { ...state, googleInfo: { ...googleInfo } };

    case ADD_TO_MOST_POPULAR:
      const { mostPopular } = payload;
      return { ...state, mostPopular: { ...mostPopular } }; //adicionei

    default:
      return state;
  }
};

export default reviewsList;
