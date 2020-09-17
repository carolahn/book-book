import {
    BOOK_DESCRIPTION
  } from "../../actions/user-books";

const defaultState = "";

const reducer = (state = defaultState, {type, description}) => {
    switch(type) {
        case BOOK_DESCRIPTION:
            return {description}

        default:
            return {state}
    }
}

export default reducer;