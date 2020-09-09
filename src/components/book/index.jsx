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
          Descrição: É um fato conhecido de todos que um leitor se distrairá com
          o conteúdo de texto legível de uma página quando estiver examinando
          sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
          distribuição normal de letras, ao contrário de "Conteúdo aqui,
          conteúdo aqui", fazendo com que ele tenha uma aparência similar a de
          um texto legível.
        </div>
        <div className="grade">
          Grade: <Rate allowHalf defaultValue={2.5} />
        </div>
      </div>
      <div className="select-menu">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Shelves"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
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
  grid-template-rows: 30px 30px 30px 28px 32px;
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
    height: 100%;
  }
  div.author {
    grid-column: 2;
    grid-row: 2;
    height: 100%;
  }
  div.description {
    grid-column: 2;
    grid-row: 3;
    height: 100%;
    white-space: nowrap;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div.grade {
    grid-column: 2;
    grid-row: 4;
    height: 100%;
  }

  .select-menu {
    margin: 0;
    grid-column: 2;
    grid-row: 5;
  }

  @media (max-width: 800px) {
    background-color: blue;
  }
`;
