import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "antd";
import { executeSearch } from "../../redux/actions/search-list";
import "antd/dist/antd.css";
import {
  BookSearchContainer,
  InputContainer,
  MainContainer,
  ResultsContainer,
  MostPopularContainer,
  MostPopularCarousel,
  StyledControl,
} from "./styles";
import Book from "../../components/book";

const BookSearch = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchList);

  const history = useHistory();
  const { page } = useParams();
  const { Search } = Input;
  const [typedInput, setTypedInput] = useState("");

  const max = 10;
  const size = useWindowSize();

  useEffect(() => {
    if (typedInput) {
      let start = page * max - max;
      const adaptedInput = typedInput.replace(/\s/g, "+");
      dispatch(executeSearch(adaptedInput, start, max));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedInput]);

  useEffect(() => {
    let start = page * max - max;
    const adaptedInput = typedInput.replace(/\s/g, "+");
    if (page > 0) {
      dispatch(executeSearch(adaptedInput, start, max));
    } else {
      history.push("/search/1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  console.log("testResult", searchResults);

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
          <StyledControl>
            <Link to={`/search/${page - 1}`}> {" < "}Anterior</Link>
            {page}
            <Link to={`/search/${parseInt(page) + 1}`}>Próximo{" > "}</Link>
          </StyledControl>
          {searchResults.map((item, index) => (
            <Book key={item.id} bookData={item} />
          ))}
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
