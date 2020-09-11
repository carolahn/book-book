import { ADD_TO_LIST } from "../../actions/search-list";

const defaultState = [];

const searchList = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_TO_LIST:
      const { searchResult } = payload;
      return searchResult;

    default:
      return state;
  }
};

export default searchList;
