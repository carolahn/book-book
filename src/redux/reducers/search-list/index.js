import { ADD_TO_LIST, CLEAR_LIST } from "../../actions/search-list";

const defaultState = [];

const searchList = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_TO_LIST:
      const { searchResult } = payload;
      return { ...state, ...searchResult };

    case CLEAR_LIST:
      return defaultState;

    default:
      return state;
  }
};

export default searchList;
