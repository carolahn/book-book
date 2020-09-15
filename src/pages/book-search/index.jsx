import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "antd";
import { executeSearch, clearList } from "../../redux/actions/search-list";
import "antd/dist/antd.css";
import {
  BookSearchContainer,
  InputContainer,
  MainContainer,
  ResultsContainer,
  MostPopularContainer,
  MostPopularCarousel,
} from "./styles.js";
import BookList from "../../components/book-list";

const BookSearch = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchList);

  const history = useHistory();
  const { Search } = Input;
  const [typedInput, setTypedInput] = useState("");
  const [message, setMessage] = useState("Loading");
  const [page, setPage] = useState(1);

  const max = 40;
  const size = useWindowSize();

  useEffect(() => {
    if (typedInput) {
      const adaptedInput = typedInput.replace(/\s/g, "+");
      dispatch(clearList());
      dispatch(executeSearch(adaptedInput, max));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedInput]);
  
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
        {size.width < 560 ? (
          <MostPopularCarousel>Carousel Extra</MostPopularCarousel>
        ) : (
          ""
        )}
        <ResultsContainer>
          {searchResults && Object.values(searchResults).length !== 0 ? (
            <BookList
              showBooks={Object.values(searchResults)}
              type="search"
              getMorePages={setPage}
            />
          ) : (
            message
          )}
        </ResultsContainer>

        <MostPopularContainer>Aside Extra</MostPopularContainer>
      </MainContainer>
    </BookSearchContainer>
  );
};

export default BookSearch;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
