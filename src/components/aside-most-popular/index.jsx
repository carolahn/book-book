/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToMostPopular } from "../../redux/actions/reviews-list";
import { useHistory } from 'react-router-dom' 
import Book from "../book";
import { Container, WrapBook } from "./styles";

const AsideMostPopular = () => {
  const [mostPopBooks, setMostPopBooks] = useState([]);
  const booksReviews = useSelector((state) => state.reviewsList.booksReviews);
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (JSON.stringify(booksReviews) !== "{}") {
      const initialPopList = Object.values(booksReviews).filter(
        (item) => item.grade >= 3
      );

      let max = initialPopList.length;
      let randomArr = [];
      let num = 0;
      for (let i = 0; i < 10; i++) {
        num = getRandomInt(0, max);
        if (randomArr.includes(num)) {
          i--;
        } else {
          randomArr.push(num);
        }
      }

      let filteredPopList = initialPopList.filter((item, index) =>
        randomArr.includes(index)
      );
      let popList = {};
      filteredPopList.map((item) => (popList[item.google_book_id] = item));
      setMostPopBooks(popList);
      dispatch(addToMostPopular(popList));
    }
  }, [booksReviews]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <Container className="aside-most-popular">
      <div className="featured-books">FEATURED BOOKS</div>
      {mostPopBooks && (
        <div>
          {Object.values(mostPopBooks).map((currBook) => (
            <WrapBook key={currBook.id} className="aside-pop">
              <Book bookData={currBook} key={currBook.title} type="aside" />
            </WrapBook>
          ))}
        </div>
      )}
    </Container>
  );
};

export default AsideMostPopular;