import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  requestGoogleInfo,
  requestReviews,
} from "../../redux/actions/reviews-list";
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
  // const googleInfo = useSelector((state) => state.reviewsList.googleInfo);
  // const booksReviews = useSelector((state) => state.reviewsList.booksReviews);

  const bookDescription = useSelector(
    (state) => state.bookDescription.description
  );

  const [bookInfoClicked, setBookInfoClicked] = useState(false);
  const [uniqueBook, setUniqueBook] = useState({});

  const tokenInfo = useSelector((state) => state.login);

  const whishlistShelf = userBooks.filter((e) => e.shelf === 1);
  const readingShelf = userBooks.filter((e) => e.shelf === 2);
  const readShelf = userBooks.filter((e) => e.shelf === 3);

  const where = location.pathname;

  const handleModal = (event) => {
    event.preventDefault();
    if (event.target.id === "modal-container") {
      setBookInfoClicked(false);
    }
  };

  function onChange(value) {
    if (userBooks[uniqueBook.google_book_id]) {
      const selectedBook = userBooks[uniqueBook.google_book_id];
      if (value === "delete") {
        dispatch(removeBook(tokenInfo.token, tokenInfo.id, selectedBook.id)); // There are bugs!!
      } else {
        dispatch(
          putBookChanges(tokenInfo.token, tokenInfo.id, selectedBook.id, value)
        );
      }
    } else if (!userBooks[uniqueBook.google_book_id] && value === "delete") {
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
          uniqueBook.grade,
          uniqueBook.categories,
          uniqueBook.review,
          uniqueBook.googleBookId
        )
      );
    }
  }

  return (
    <StyledShelf className="shelf">
      {" "}
      {console.log(bookDescription)}
      {bookInfoClicked ? (
        <>
          <BookInfo
            title={uniqueBook.title}
            image={uniqueBook.image}
            description={uniqueBook.description}
            addFeedback={false}
            grading={uniqueBook.grade}
            handleModal={handleModal}
            onChange={onChange}
            type="shelf"
            googleBookId={uniqueBook.googleBookId}
            bookId={uniqueBook.id}
          />{" "}
          {console.log("Unique: " + uniqueBook.description)}{" "}
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
            {whishlistShelf.map((e) => (
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
            {readingShelf.map((e) => (
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
            {readShelf.map((e) => (
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
