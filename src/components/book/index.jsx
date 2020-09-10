import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Card, Select, Rate } from "antd";
import "antd/dist/antd.css";
import bookImage from "../../assets/images/book-example.png";

const Book = () => {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
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
    <BookConatiner className="book">
      <img src={bookImage} alt="cover" />
      <div className="book-info">
        <div className="title">Título do livro</div>
        <div className="author">by Autor</div>
        <div className="description">
          <p>
            É um fato conhecido de todos que um leitor se distrairá com o
            conteúdo de texto legível de uma página quando estiver examinando
            sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
            distribuição normal de letras, ao contrário de "Conteúdo aqui,
            conteúdo aqui", fazendo com que ele tenha uma aparência similar a de
            um texto legível.
          </p>
        </div>
        <div className="grade">
          <Rate
            allowHalf
            defaultValue={2.5}
            style={{ fontSize: 15, display: "revert" }}
          />
        </div>
      </div>
      <div className="select-menu">
        <Select
          style={{ padding: 0 }}
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
          <Option value="jack">Want to read</Option>
          <Option value="lucy">Current reading</Option>
          <Option value="tom">Read</Option>
          <Option value="tom">Remove</Option>
        </Select>
      </div>
    </BookConatiner>
  );
};

export default Book;

const BookConatiner = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;
  background-color: white;
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 30px 16px 60px 20px 24px;
  box-sizing: border-box;
  color: black;
  text-align: left;

  img {
    grid-column: 1;
    grid-row: 1/6;
    width: 100%;
    align-self: center;
  }
  div.title {
    grid-column: 2;
    grid-row: 1;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
  }
  div.author {
    grid-column: 2;
    grid-row: 2;
    height: 16px;
    font-size: 12px;
    font-style: italic;
    line-height: 16px;
    margin: 0;
  }
  div.description {
    grid-column: 2;
    grid-row: 3;
    height: 60px;
    white-space: wrap;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 15px;
    color: #777777;
  }

  div.grade {
    grid-column: 2;
    grid-row: 4;
    height: 20px;
    line-height: 20px;
    text-align: right;
    margin: 0;
    padding: 0;
  }

  .select-menu {
    margin: 0;
    grid-column: 2;
    grid-row: 5;
    display: grid;
    text-align: center;
  }

  .select-menu .ant-select {
    font-size: 12px;
  }

  .select-menu .ant-select-arrow {
    top: 13px;
    right: 61px;
  }

  @media (max-width: 800px) {
    background-color: blue;
  }
`;
