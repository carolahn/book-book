import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postUserBook,
  removeBook,
  putBookChanges,
  requestUsersBookDescription,
  deleteAllBooks,
} from "../../redux/actions/user-books";
import { requestReviews } from "../../redux/actions/reviews-list";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { StyledShelf, ShelvesButtons, BookShelf, Book } from "./styles";
import BookInfo from "../../components/book-info";
import { notification } from "antd";
import noBookImage from "../../assets/images/book-cover/book-image-not-available.png";

const Shelves = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const userBooks = useSelector((state) => Object.values(state.userBooks));
  const userBooksObj = useSelector((state) => state.userBooks);
  const userBooksById = useSelector((state) => state.userBooksById);
  const bookDescription = useSelector(
    (state) => state.bookDescription.description
  );
  const booksReviews = useSelector((state) => state.reviewsList.booksReviews);

  const [bookInfoClicked, setBookInfoClicked] = useState(false);
  const [uniqueBook, setUniqueBook] = useState({});
  const [shelfValue, setShelfValue] = useState();

  const tokenInfo = useSelector((state) => state.login);

  const whishlistShelf = userBooks.filter((e) => e.shelf === 1);
  const readingShelf = userBooks.filter((e) => e.shelf === 2);
  const readShelf = userBooks.filter((e) => e.shelf === 3);

  const where = location.pathname;

  useEffect(() => {
    if (JSON.stringify(booksReviews) === "{}") {
      dispatch(requestReviews(tokenInfo.token));
    }
  }, []);

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
    if (
      bookInfoClicked === false &&
      shelfValue !== undefined &&
      shelfValue != uniqueBook.shelf
    ) {
      sendChanges(shelfValue);
    } else {
      setShelfValue();
      return;
    }
  }, [bookInfoClicked]);

  const handleReset = () => {
    dispatch(deleteAllBooks(tokenInfo.token, tokenInfo.id, userBooksById));
  };

  return (
    <StyledShelf className="shelf">
      <button onClick={handleReset} className="reset-btn">
        RESET
      </button>
      {bookInfoClicked ? (
        <>
          <BookInfo
            title={uniqueBook.title}
            image={uniqueBook.image}
            description={bookDescription}
            addFeedback={true}
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
              <div key={i}>
                <Book
                  colour="darkred"
                  alt={e.title}
                  src={e.image_url === "image_url" ? noBookImage : e.image_url}
                  onClick={() => {
                    dispatch(requestUsersBookDescription(e.google_book_id));
                    setBookInfoClicked(true);
                    console.log("e.grade", e.grade);
                    setUniqueBook({
                      author: e.author,
                      title: e.title,
                      image: e.image_url,
                      grade: (e.grade = 0), ///////////arrumar, não aparece o grading do google
                      googleBookId: e.google_book_id,
                      id: e.id,
                      description: bookDescription,
                      review: e.review,
                      categories: e.categories,
                      shelf: e.shelf,
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
              <div key={i}>
                <Book
                  colour="darkred"
                  alt={e.title}
                  src={e.image_url === "image_url" ? noBookImage : e.image_url}
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
                      shelf: e.shelf,
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
              <div key={i}>
                <Book
                  colour="darkred"
                  alt={e.title}
                  src={e.image_url === "image_url" ? noBookImage : e.image_url}
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
                      shelf: e.shelf,
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
