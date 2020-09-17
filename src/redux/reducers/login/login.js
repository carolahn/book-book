import LOGIN_ACTIONS from "../../actions/login/login-action-types";

localStorage.getItem('book-book-token') === null && localStorage.setItem('book-book-token', JSON.stringify({
  error: '',
  error_messsage: '',
  id: '',
  username: '',
  token: ''
}))

 const defaultState = localStorage.getItem("book-book-token") && 
                      /^[\{\[]/.test(localStorage.getItem("book-book-token")) && 
                      JSON.parse(localStorage.getItem('book-book-token'))

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.LOGIN_SUCCESSFUL:
      localStorage.setItem(
        "book-book-token",
        JSON.stringify({
          token: `${action.token}`,
          id: `${action.userId}`,
          username: `${action.username}`,
        })
      );
      return {
        ...state,
        error: "",
        error_message: "",
        id: action.userId,
        username: action.username,
        token: action.token,
      };

    case LOGIN_ACTIONS.LOGIN_UNSUCCESSFUL:
      return {
        ...state,
        error: 401,
        error_message: action.error_message,
        token: "",
        id: "",
        username: "",
      };

    case LOGIN_ACTIONS.LOGOUT:
      localStorage.getItem("book-book-token") &&
        localStorage.removeItem("book-book-token");
      return {
        ...state,
        error: "",
        error_message: "",
        id: "",
        username: "",
        token: "",
      };

    default:
      return state;
  }
};

export default reducer;