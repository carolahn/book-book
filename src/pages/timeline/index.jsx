/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestReviews } from "../../redux/actions/reviews-list";
import BookListPaginated from "../../containers/book-list-paginated";
import {
  ListContainer,
  MainContainer,
  MostPopularCarousel,
  MostPopularContainer,
  ResultsContainer,
} from "./styles.js";
import AsideMostPopular from "../../components/aside-most-popular";
import CarouselMostPopular from "../../components/carousel";

const Timeline = () => {
  const [message, setMessage] = useState("Loading");
  const token = useSelector((state) => state.login.token);
  const booksReviews = useSelector((state) => state.reviewsList.booksReviews);
  const dispatch = useDispatch();
  const size = useWindowSize();

  useEffect(() => {
    dispatch(requestReviews(token));
  }, [token]);

  return (
    <ListContainer>
      <MainContainer>
        {size.width < 940 ? (
          <MostPopularCarousel>
            <CarouselMostPopular />
          </MostPopularCarousel>
        ) : (
          ""
        )}
        <ResultsContainer>
          {/* {booksReviews && Object.values(booksReviews).length !== 0 ? (
            <BookListPaginated
              showBooks={Object.values(booksReviews)}
              type="timeline"
            />
          ) : (
            message
          )} */}

          {Object.values(booksReviews).length !== 0 ? (
            <BookListPaginated
              showBooks={Object.values(booksReviews)}
              type="timeline"
            />
          ) : (
            message
          )}
        </ResultsContainer>

        <MostPopularContainer>
          <AsideMostPopular />
        </MostPopularContainer>
      </MainContainer>
    </ListContainer>
  );
};

export default Timeline;

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
