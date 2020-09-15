import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Rate } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import { BookContainer } from "./styles.js";
import {
  postUserBook,
  removeBook,
  putBookChanges,
} from "../../redux/actions/user-books";

const Book = ({ bookData, type }) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  const userBooks = useSelector((state) => state.userBooks);
  const googleInfo = useSelector((state) => state.reviewsList.googleInfo);

  /* ainda a ser decidido
    const bookData = {
      title = props.title,
      author: props.author,
      image_url: props.image_url,
      grade: props.grade,
      categories: props.categories,
      review: props.review,
      google_book_id: props.google_book_id
    }
  */

  function onChange(value) {
    if (userBooks[bookData.google_book_id]) {
      const selectedBook = userBooks[bookData.google_book_id];
      if (value === "delete") {
        dispatch(removeBook(user.token, user.id, selectedBook.id));
      } else {
        dispatch(putBookChanges(user.token, user.id, selectedBook.id, value));
      }
    } else if (!userBooks[bookData.google_book_id] && value === "delete") {
      return;
    } else {
      dispatch(
        postUserBook(
          user.token,
          user.id,
          bookData.title,
          bookData.author,
          value, // shelf -> 1, 2 ou 3
          bookData.image_url,
          0, // grade
          bookData.categories,
          "", // review
          bookData.google_book_id
        )
      );
    }
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <BookContainer className="book">
      {type === "search-desktop" && (
        <>
          <img src={bookData.image_url} alt="cover" />
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
          <img src={bookData.image_url} alt="cover" />
          <div className="book-info">
            <div className="title">{bookData.title}</div>
            <div className="author">{bookData.author}</div>
            <div className="description description-search-mobile">
              <p>{bookData.description}</p>
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
          <img src={bookData.image_url} alt="cover" />
          <div className="book-info">
            <div className="title">{bookData.title}</div>
            <div className="author">{bookData.author}</div>
            <div className="description description-timeline">
              {bookData.review ? <p>{bookData.review}</p> : <p>No review</p>}
              <p>
                By <a href="">{bookData.creator.user}</a>
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
          <img src={bookData.image_url} alt="cover" />
          <div className="book-info">
            <div className="title">{bookData.title}</div>
            <div className="author">{bookData.author}</div>
            <div className="description description-timeline">
              {bookData.review ? <p>{bookData.review}</p> : <p>No review</p>}
              <p>
                By <a href="">{bookData.creator.user}</a>
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

      <div className="select-menu">
        <Select
          showSearch
          style={{ width: 200 }}
          size={"small"}
          placeholder="SHELF"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="1" style={{ paddingLeft: 37 }}>
            <span>Wish List</span>
          </Option>
          <Option value="2" style={{ paddingLeft: 37 }}>
            <span>Reading</span>
          </Option>
          <Option value="3" style={{ paddingLeft: 37 }}>
            <span>Read</span>
          </Option>
          <Option value="delete" style={{ color: "#dd2e44" }}>
            <DeleteTwoTone twoToneColor="#dd2e44" style={{ marginRight: 10 }} />
            <span>Remove</span>
          </Option>
        </Select>
      </div>
    </BookContainer>
  );
};

export default Book;
