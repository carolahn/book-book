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
import { notification } from "antd";

const Shelves = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const userBooks = useSelector((state) => Object.values(state.userBooks));
  const userBooksObj = useSelector((state) => state.userBooks);

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
    if (event.target.id === "modal-container") {
      setBookInfoClicked(false);
    }
  };

  function sendChanges(value) {
    if (userBooksObj[uniqueBook.googleBookId]) {
      const selectedBook = userBooksObj[uniqueBook.googleBookId];
      if (value === "delete") {
        dispatch(removeBook(tokenInfo.token, tokenInfo.id, selectedBook.id));
        notification.info({
          key: tokenInfo.id,
          message: "Done:",
          description: "The book has been removed!",
        });
      } else {
        dispatch(
          putBookChanges(tokenInfo.token, tokenInfo.id, selectedBook.id, value)
        );
        notification.success({
          key: tokenInfo.id,
          message: "Done:",
          description: "Shelf change completed!",
        });
      }
    } else if (!userBooksObj[uniqueBook.googleBookId] && value === "delete") {
      return notification.error({
        key: tokenInfo.id,
        message: "Error:",
        description: "This book are not in your shelves!",
      });
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
      notification.success({
        key: tokenInfo.id,
        message: "Done:",
        description: "The book has been added to your shelf!",
      });
    }
  }

  function onChange(value) {
    setShelfValue(value);
  }

  useEffect(() => {
    if (bookInfoClicked === false && shelfValue !== undefined)
      sendChanges(shelfValue);
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
            grading={0}
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
