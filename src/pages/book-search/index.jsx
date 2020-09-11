import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Input } from "antd";
import "antd/dist/antd.css";
import {
  BookSearchContainer,
  InputContainer,
  MainContainer,
  ResultsContainer,
  MostPopularContainer,
} from "./styled";
import axios from "axios";
// import { res } from "./helper";
import Book from "../../components/book";

const BookSearch = () => {
  const { Search } = Input;
  const [typedInput, setTypedInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //   const {page} = useParams();
  const start = 0;
  const max = 10;

  const normalizator = ({
    id,
    volumeInfo: { title, authors, description, imageLinks, categories },
  }) => ({
    title: title,
    author: authors.join(", "),
    description: description,
    image_url: imageLinks.smallThumbnail || imageLinks.thumbnail,
    grade: 0,
    categories: categories.join(", "),
    review: "",
    google_book_id: id,
  });

  useEffect(() => {
    let resNormalized = [];
    if (typedInput) {
      const adaptedInput = typedInput.replace(/\s/g, "+");
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${adaptedInput}&startIndex=${start}&maxResults=${max}`
        )
        .then((res) => res.data)
        .then((res) => {
          resNormalized = res.items.map((item, index) => {
            return normalizator(item);
          });
          setSearchResults(resNormalized);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedInput]);

  console.log("search", searchResults);

  return (
    <BookSearchContainer className="book-search">
      <InputContainer>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={(value) => setTypedInput(value)}
        />
      </InputContainer>
      <MainContainer>
        <ResultsContainer>
          {searchResults.map((item, index) => (
            <Book key={item.id} bookData={item} />
          ))}
        </ResultsContainer>
        <MostPopularContainer></MostPopularContainer>
      </MainContainer>
    </BookSearchContainer>
  );
};

export default BookSearch;
