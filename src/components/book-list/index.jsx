import React, { useState, useEffect } from "react";

import Book from "../book";
import { Container, MostPopular } from "./styled";

const minWindowsSize = 933;

const BookList = ({ showBooks }) => {
  const [showPopular, setShowPopular] = useState(
    window.innerWidth > minWindowsSize
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth <= minWindowsSize) setShowPopular(false);
      else setShowPopular(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const showScreen = (books) =>
    books.map((currBook, key) => <Book data={currBook} key={key} />);

  return (
    <Container>
      <div>{showScreen(Object.values(showBooks))}</div>
      {showPopular && (
        <MostPopular>
          {showScreen(
            Object.values(showBooks)
              .filter((currBook) => {
                if (!currBook.grade || currBook.grade !== 5) return false;
                return true;
              })
              .filter(function (a) {
                return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
            }, Object.create(null))
          )}
        </MostPopular>
      )}
    </Container>
  );
};

export default BookList;
