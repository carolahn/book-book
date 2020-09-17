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
import BookListPaginated from "../../containers/book-list-paginated";
import AsideMostPopular from "../../components/aside-most-popular";
import CarouselMostPopular from "../../components/carousel";

const BookSearch = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchList);

  const { Search } = Input;
  const [typedInput, setTypedInput] = useState("");
  const [message, setMessage] = useState("Loading");

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
        {size.width < 940 ? (
          <MostPopularCarousel>
            <CarouselMostPopular />
          </MostPopularCarousel>
        ) : (
          ""
        )}
        <ResultsContainer>
          {searchResults && Object.values(searchResults).length !== 0 ? (
            <BookListPaginated
              showBooks={Object.values(searchResults)}
              type="search"
            />
          ) : (
            message
          )}
        </ResultsContainer>

        <MostPopularContainer>
          <AsideMostPopular />
        </MostPopularContainer>
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
