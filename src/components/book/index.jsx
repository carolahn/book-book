import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Rate, notification } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import { BookContainer } from "./styles.js";
import BookInfo from "../book-info";
import {
  postUserBook,
  removeBook,
  putBookChanges,
  requestUsersBookDescription,
} from "../../redux/actions/user-books";
import { requestReviews } from "../../redux/actions/reviews-list";
import { Link } from "react-router-dom";
import noBookImage from "../../assets/images/book-cover/book-image-not-available.png";

const Book = ({ bookData, type }) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  const userBooks = useSelector((state) => state.userBooks);
  const userBooksById = useSelector((state) => state.userBooksById);

  const [bookInfoClicked, setBookInfoClicked] = useState(false);
  const googleInfo = useSelector((state) => state.reviewsList.googleInfo);
  const bookDescription = useSelector(
    (state) => state.bookDescription.description
  );

  useEffect(() => {}, [bookInfoClicked]);

  function onChange(value) {
    if (userBooks[bookData.google_book_id]) {
      const selectedBook = userBooks[bookData.google_book_id];

      if (value === "delete") {
        dispatch(removeBook(user.token, user.id, selectedBook.id));
        notification.info({
          key: user.id,
          message: "Done:",
          description: "The book has been removed!",
        });
      } else if (value != selectedBook.shelf) {
        dispatch(putBookChanges(user.token, user.id, selectedBook.id, value));
        notification.success({
          key: user.id,
          message: "Done:",
          description: "Shelf change completed!",
        });
      } else if (value == selectedBook.shelf) {
        notification.info({
          key: user.id,
          message: "Info:",
          description: "The book already is on this shelf!",
        });
      }
    } else if (!userBooks[bookData.google_book_id] && value === "delete") {
      return notification.error({
        key: user.id,
        message: "Error:",
        description: "This book are not in your shelves!",
      });
    } else {
      dispatch(
        postUserBook(
          user.token,
          user.id,
          bookData.title,
          bookData.author,
          value,
          bookData.image_url,
          0,
          bookData.categories,
          "",
          bookData.google_book_id
        )
      );
      notification.success({
        key: user.id,
        message: "Done:",
        description: "The book has been added to your shelf!",
      });
    }
  }

  const handleBookInfo = (event) => {
    dispatch(requestUsersBookDescription(bookData.google_book_id));
    const eventClassName = event.target.className;
    setTimeout(() => {
      if (
        bookInfoClicked === false &&
        !eventClassName.includes("ant-select") &&
        !eventClassName.includes("spanSelect")
      ) {
        setBookInfoClicked(true);
      }
    }, 200);
  };

  const handleModal = (event) => {
    if (event.target.id === "modal-container") {
      setBookInfoClicked(false);
    }
  };

  return (
    <div>
      <BookContainer className="book" onClick={handleBookInfo}>
        {type === "search-desktop" && (
          <>
            <img
              src={
                bookData.image_url === "" || bookData.image_url === null
                  ? noBookImage
                  : bookData.image_url
              }
              alt="cover"
              className="bookImage"
            />
            <div className="book-info">
              <div className="title">{bookData.title}</div>
              <div className="author">{bookData.author}</div>
              <div className="description description-search-desktop">
                <p>{bookData.categories}</p>
                <p>{bookData.year}</p>
              </div>
              <div className="grade">
                <Rate
                  disabled
                  allowHalf
                  defaultValue={bookData.grade || 0}
                  style={{ fontSize: 15, display: "revert" }}
                />
              </div>
            </div>
          </>
        )}

        {type === "search-mobile" && (
          <>
            <img
              src={
                bookData.image_url === "" || bookData.image_url === null
                  ? noBookImage
                  : bookData.image_url
              }
              alt="cover"
              className="bookImage"
            />
            <div className="book-info">
              <div className="title">{bookData.title}</div>
              <div className="author">{bookData.author}</div>
              <div className="description description-search-mobile">
                {bookData.description ? (
                  bookData.description.length > 80 ? (
                    <p>{bookData.description.slice(0, 80)}...</p>
                  ) : (
                    <p>{bookData.description}</p>
                  )
                ) : (
                  <p>No review</p>
                )}
              </div>
              <div className="grade">
                <Rate
                  disabled
                  allowHalf
                  defaultValue={bookData.grade || 0}
                  style={{ fontSize: 15, display: "revert" }}
                />
              </div>
            </div>
          </>
        )}

        {type === "timeline-desktop" && (
          <>
            <img
              src={
                bookData.image_url === "" || bookData.image_url === null
                  ? noBookImage
                  : bookData.image_url
              }
              alt="cover"
              className="bookImage"
            />
            <div className="book-info">
              <div className="title">{bookData.title}</div>
              <div className="author">{bookData.author}</div>
              <div className="description description-timeline">
                {bookData.review ? (
                  bookData.review.length > 65 ? (
                    <p>{bookData.review.slice(0, 65)}...</p>
                  ) : (
                    <p>{bookData.review}</p>
                  )
                ) : (
                  <p>No review</p>
                )}
                <p>
                  By{" "}
                  <Link to={`/profile/${bookData.creator.id}`}>
                    {bookData.creator.user}
                  </Link>
                </p>
              </div>
              <div className="grade">
                <Rate
                  disabled
                  allowHalf
                  defaultValue={bookData.grade || 0}
                  style={{ fontSize: 15, display: "revert" }}
                />
              </div>
            </div>
          </>
        )}

        {type === "timeline-mobile" && (
          <>
            <img
              src={
                bookData.image_url === "" || bookData.image_url === null
                  ? noBookImage
                  : bookData.image_url
              }
              alt="cover"
              className="bookImage"
            />
            <div className="book-info">
              <div className="title">{bookData.title}</div>
              <div className="author">{bookData.author}</div>
              <div className="description description-timeline">
                {bookData.review ? (
                  bookData.review.length > 65 ? (
                    <p>{bookData.review.slice(0, 65)}...</p>
                  ) : (
                    <p>{bookData.review}</p>
                  )
                ) : (
                  <p>No review</p>
                )}
                <p>
                  By{" "}
                  <Link to={`/profile/${bookData.creator.id}`}>
                    {bookData.creator.user}
                  </Link>
                </p>
              </div>
              <div className="grade">
                <Rate
                  disabled
                  allowHalf
                  defaultValue={bookData.grade || 0}
                  style={{ fontSize: 15, display: "revert" }}
                />
              </div>
            </div>
          </>
        )}

        {type === "aside" && (
          <>
            <img
              src={
                bookData.image_url === "" || bookData.image_url === null
                  ? noBookImage
                  : bookData.image_url
              }
              alt="cover"
              className="bookImage"
            />
            <div className="book-info-aside">
              {bookData.review ? (
                bookData.review.length > 240 ? (
                  <p>{bookData.review.slice(0, 240)}...</p>
                ) : (
                  <p>{bookData.review}</p>
                )
              ) : (
                <p>No review</p>
              )}
              <p>
                By{" "}
                <Link to={`/profile/${bookData.creator.id}`}>
                  {bookData.creator.user}
                </Link>
              </p>
            </div>
            <div className="grade">
              <Rate
                disabled
                allowHalf
                defaultValue={bookData.grade || 0}
                style={{ fontSize: 15, display: "center" }}
              />
            </div>
          </>
        )}

        {type === "carousel" && (
          <>
            <img src={bookData.image_url} alt="cover" className="bookImage" />
            <div className="book-info">
              <div className="title">{bookData.title}</div>
              <div className="author">{bookData.author}</div>
              <div className="description description-search-desktop">
                <p>{bookData.categories}</p>
                <p>{bookData.year}</p>
              </div>
              <div className="grade">
                <Rate
                  disabled
                  allowHalf
                  defaultValue={bookData.grade || 0}
                  style={{ fontSize: 15, display: "revert" }}
                />
              </div>
            </div>
          </>
        )}

        <div className="select-menu">
          <Select
            style={{ width: 200 }}
            size={"small"}
            placeholder="SHELF"
            optionFilterProp="children"
            onChange={onChange}
          >
            <Option value="1" style={{ paddingLeft: 37 }}>
              <span className="spanSelect">Wishlist</span>
            </Option>
            <Option value="2" style={{ paddingLeft: 37 }}>
              <span className="spanSelect">Reading</span>
            </Option>
            <Option value="3" style={{ paddingLeft: 37 }}>
              <span className="spanSelect">Read</span>
            </Option>
            <Option value="delete" style={{ color: "#dd2e44" }}>
              <DeleteTwoTone
                twoToneColor="#dd2e44"
                style={{ marginRight: 10 }}
              />
              <span className="spanSelect">Remove</span>
            </Option>
          </Select>
        </div>
      </BookContainer>
      {type != "carousel"
        ? bookInfoClicked && (
            <BookInfo
              type="search"
              title={bookData.title}
              author={bookData.author}
              image={bookData.image_url}
              description={bookDescription}
              grading={bookData.grade}
              handleModal={handleModal}
              onChange={onChange}
              addFeedback={false}
              bookId={bookData.id}
              googleBookId={bookData.google_book_id}
            />
          )
        : ""}
    </div>
  );
};

export default Book;
