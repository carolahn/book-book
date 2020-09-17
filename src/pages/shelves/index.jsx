import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postUserBook,
  removeBook,
  putBookChanges,
  requestUsersBookDescription,
} from "../../redux/actions/user-books";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { StyledShelf, ShelvesButtons, BookShelf, Book } from "./styles";
import BookInfo from "../../components/book-info";

const Shelves = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const userBooks = useSelector((state) => Object.values(state.userBooks));

  const bookDescription = useSelector(
    (state) => state.bookDescription.description
  );

  const [bookInfoClicked, setBookInfoClicked] = useState(false);
  const [uniqueBook, setUniqueBook] = useState({});
  const [shelfValue, setShelfValue] = useState();

  const tokenInfo = useSelector((state) => state.login);

  const whishlistShelf = userBooks.filter((e) => e.shelf === 1);
  const readingShelf = userBooks.filter((e) => e.shelf === 2);
  const readShelf = userBooks.filter((e) => e.shelf === 3);

  const where = location.pathname;

  const handleModal = (event) => {
    event.preventDefault(); //adicionei
    if (event.target.id === "modal-container") {
      setBookInfoClicked(false);
    }
  };

  function sendChanges(value) {
    if (userBooks[uniqueBook.googleBookId]) {
      const selectedBook = userBooks[uniqueBook.googleBookId];
      if (value === "delete") {
        dispatch(removeBook(tokenInfo.token, tokenInfo.id, selectedBook.id));
      } else {
        dispatch(
          putBookChanges(tokenInfo.token, tokenInfo.id, selectedBook.id, value)
        );
      }
    } else if (!userBooks[uniqueBook.googleBookId] && value === "delete") {
      return;
    } else {
      dispatch(
        postUserBook(
          tokenInfo.token,
          tokenInfo.id,
          uniqueBook.title,
          uniqueBook.author,
          value,
          uniqueBook.image,
          0,
          uniqueBook.categories,
          "",
          uniqueBook.googleBookId
        )
      );
    }
  }

  function onChange(value) {
    setShelfValue(value);
    console.log("value", value); //adicionei
  }

  useEffect(() => {
    if (bookInfoClicked === false && shelfValue !== undefined) {
      console.log("clicou fora");
      sendChanges(shelfValue);
    }
  }, [bookInfoClicked]);

  return (
    <StyledShelf className="shelf">
      {bookInfoClicked ? (
        <>
          <BookInfo
            title={uniqueBook.title}
            image={uniqueBook.image}
            description={bookDescription}
            addFeedback={false}
            grading={uniqueBook.grade}
            handleModal={handleModal}
            onChange={onChange}
            type="shelf"
            googleBookId={uniqueBook.googleBookId}
            bookId={uniqueBook.id}
          />{" "}
        </>
      ) : (
        <></>
      )}
      <ShelvesButtons>
        <button
          onClick={() => history.push("/my-shelves/whishlist")}
          className={where === "/my-shelves/whishlist" ? "here" : ""}
        >
          Wishlist
        </button>
        <button
          onClick={() => history.push("/my-shelves/reading")}
          id="rbutton"
          className={where === "/my-shelves/reading" ? "here" : ""}
        >
          Reading
        </button>
        <button
          onClick={() => history.push("/my-shelves/read")}
          className={where === "/my-shelves/read" ? "here" : ""}
        >
          Read
        </button>
      </ShelvesButtons>
      <Switch>
        <Route path="/my-shelves/whishlist">
          <BookShelf>
            {whishlistShelf.map((e, i) => (
              <div>
                <Book
                  colour="darkred"
                  alt={e.title}
                  src={e.image_url}
                  onClick={() => {
                    dispatch(requestUsersBookDescription(e.google_book_id));
                    setBookInfoClicked(true);
                    setUniqueBook({
                      author: e.author,
                      title: e.title,
                      image: e.image_url,
                      grade: (e.grade = 0),
                      googleBookId: e.google_book_id,
                      id: e.id,
                      description: bookDescription,
                      review: e.review,
                      categories: e.categories,
                    });
                  }}
                />
              </div>
            ))}
          </BookShelf>
        </Route>
        <Route path="/my-shelves/reading">
          <BookShelf>
            {readingShelf.map((e, i) => (
              <div>
                <Book
                  colour="darkred"
                  alt={e.title}
                  src={e.image_url}
                  onClick={() => {
                    dispatch(requestUsersBookDescription(e.google_book_id));
                    setBookInfoClicked(true);
                    setUniqueBook({
                      author: e.author,
                      title: e.title,
                      image: e.image_url,
                      grade: (e.grade = 0),
                      googleBookId: e.google_book_id,
                      id: e.id,
                      description: bookDescription && bookDescription,
                      review: e.review,
                      categories: e.categories,
                    });
                  }}
                />
              </div>
            ))}
          </BookShelf>
        </Route>
        <Route path="/my-shelves/read">
          <BookShelf>
            {readShelf.map((e, i) => (
              <div>
                <Book
                  colour="darkred"
                  alt={e.title}
                  src={e.image_url}
                  onClick={() => {
                    dispatch(requestUsersBookDescription(e.google_book_id));
                    setBookInfoClicked(true);
                    setUniqueBook({
                      author: e.author,
                      title: e.title,
                      image: e.image_url,
                      grade: (e.grade = 0),
                      googleBookId: e.google_book_id,
                      id: e.id,
                      description: bookDescription,
                      review: e.review,
                      categories: e.categories,
                    });
                  }}
                />
              </div>
            ))}
          </BookShelf>
        </Route>
      </Switch>
    </StyledShelf>
  );
};

export default Shelves;
