import axios from "axios";

export const GET_USER_BOOKS = " GET_USER_BOOKS";
export const ADD_TO_SHELF = "ADD_TO_SHELF";
export const REMOVE_OF_SHELF = "REMOVE_OF_SHELF";
export const CHANGE_BOOK_DATA = "CHANGE_BOOK_DATA";
export const GET_USER_BOOKS_BY_ID = "GET_USER_BOOKS_BY_ID";
export const RESET_SHELVES = "RESET_SHELVES";

export const requestUserBooks = (token, id) => (dispatch) => {
  axios
    .get(`https://ka-users-api.herokuapp.com/users/${id}/books/`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(({ data }) => {
      const normalized = {};
      const normalizedById = {};
      data.map((currentBook) => {
        normalized[currentBook.google_book_id] = { ...currentBook };
        normalizedById[currentBook.id] = { ...currentBook };
      });
      dispatch(getUserBooks(normalized));
      dispatch(getUserBooksById(normalizedById));
    });
  // .catch((e) => {
  //   const errorstatus = e.response.status;
  //   console.log("Erro: ", errorstatus);
  // });
};

export const getUserBooks = (userBooks) => ({
  type: GET_USER_BOOKS,
  payload: {
    userBooks,
  },
});

export const getUserBooksById = (userBooksById) => ({
  type: GET_USER_BOOKS_BY_ID,
  payload: {
    userBooksById,
  },
});

export const deleteAllBooks = (token, id, userBooksById) => (dispatch) => {
  let urlRequests = [];

  Object.keys(userBooksById).map((bookId) => {
    urlRequests.push(
      `https://ka-users-api.herokuapp.com/users/${id}/books/${bookId}`
    );
  });

  if (urlRequests) {
    let promises = [];
    urlRequests.forEach((item, index) => {
      promises.push(
        axios.delete(item, {
          headers: {
            Authorization: `${token}`,
          },
        })
      );
    });
    axios.all(promises).then(() => {
      dispatch(requestUserBooks(token, id));
      dispatch(removeOfShelf());
      dispatch(resetShelves());
    });
  }

  // axios
  // .delete(
  //   `https://ka-users-api.herokuapp.com/users/${id}/books/${bookToRemove}`,
  //   {
  //     headers: {
  //       Authorization: `${token}`,
  //     },
  //   }
  // )
  // .then(() => {
  //   dispatch(requestUserBooks(token, id));
  //   dispatch(removeOfShelf());
  //   dispatch(resetShelves())
  // });
};

const resetShelves = () => {
  return {
    type: RESET_SHELVES,
  };
};

export const postUserBook = (
  token,
  id,
  title,
  author,
  shelf = 1,
  image_url,
  grade = 0,
  categories,
  review = "",
  google_book_id
) => async (dispatch) => {
  await axios({
    method: "post",
    url: `https://ka-users-api.herokuapp.com/users/${id}/books/`,
    headers: {
      Authorization: `${token}`,
    },
    data: {
      book: {
        title: title,
        author: author,
        shelf: shelf,
        image_url: image_url,
        grade: grade,
        categories: categories,
        review: review,
        google_book_id: google_book_id,
      },
    },
  }).then(() => {
    dispatch(requestUserBooks(token, id));
    dispatch(addToShelf());
  });
  // .catch((e) => {
  //   const errorstatus = e.response.status;
  //   console.log("Erro: ", errorstatus);
  // });
};

const addToShelf = () => {
  return {
    type: ADD_TO_SHELF,
  };
};

export const removeBook = (token, id, bookToRemove) => (dispatch) => {
  axios
    .delete(
      `https://ka-users-api.herokuapp.com/users/${id}/books/${bookToRemove}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then(() => {
      dispatch(requestUserBooks(token, id));
      dispatch(removeOfShelf());
    });
};

const removeOfShelf = () => {
  return {
    type: REMOVE_OF_SHELF,
  };
};

export const putBookChanges = (
  token,
  id,
  bookToChange,
  value,
  grade,
  review
) => (dispatch) => {
  axios({
    method: "put",
    url: `https://ka-users-api.herokuapp.com/users/${id}/books/${bookToChange}`,
    headers: {
      Authorization: `${token}`,
    },
    data: {
      book: {
        shelf: value,
        review: review,
        grade: grade,
      },
    },
  }).then(() => {
    dispatch(requestUserBooks(token, id));
    dispatch(changeBookData());
  });
};

const changeBookData = () => {
  return {
    type: CHANGE_BOOK_DATA,
  };
};

export const BOOK_DESCRIPTION = "BOOK_DESCRIPTION";

const addUserBookDescription = (description) => {
  return {
    type: BOOK_DESCRIPTION,
    description,
  };
};

export const requestUsersBookDescription = (google_book_id) => async (
  dispatch
) => {
  if (isNaN(google_book_id)){
  await axios
    .get(`https://www.googleapis.com/books/v1/volumes/${google_book_id}`)
    .then((res) => res.data.volumeInfo.description)
    .then((res) => dispatch(addUserBookDescription(res)));
  }
};
