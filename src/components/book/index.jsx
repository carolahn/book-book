import React from "react";
import { useSelector } from "react-redux";
import { Select, Rate } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import { BookContainer } from "./styles";

const Book = ({ bookData }) => {
  const { Option } = Select;

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
    console.log(`selected ${value}`);
    // adicionar o dispatch() aqui
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
      <img src={bookData.image_url} alt="cover" />
      <div className="book-info">
        <div className="title">{bookData.title}</div>
        <div className="author">{bookData.author}</div>
        <div className="description">
          <p>{bookData.review || bookData.description}</p>
        </div>
        <div className="grade">
          <Rate
            disabled
            allowHalf
            defaultValue={bookData.grade}
            style={{ fontSize: 15, display: "revert" }}
          />
        </div>
      </div>
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
          <Option value="shelf1" style={{ paddingLeft: 37 }}>
            <span>Want to read</span>
          </Option>
          <Option value="shelf2" style={{ paddingLeft: 37 }}>
            <span>Current reading</span>
          </Option>
          <Option value="shelf3" style={{ paddingLeft: 37 }}>
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
