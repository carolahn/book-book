import React from "react";

import { Container, WrapBook } from "./styles.js";
import Book from "../book";
import AsideDescription from "../aside-description";

const BookList = ({ showBooks, type, page, size }) => {
  console.log("showBooks", showBooks);
  return (
    <Container>
      {size.width < 627 && (
        <div>
          {showBooks
            .slice((page - 1) * 10, (page - 1 + 10) * 10)
            .map((currBook) => (
              <WrapBook key={currBook.id}>
                <Book bookData={currBook} type={type.concat("-mobile")} />
              </WrapBook>
            ))}
        </div>
      )}

      {size.width >= 627 && (
        <div>
          {showBooks
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((currBook, key) => (
              <WrapBook key={key}>
                <Book bookData={currBook} type={type.concat("-desktop")} />
                <AsideDescription
                  type={type.concat("-desktop")}
                  description={currBook.description}
                  review={currBook.review}
                  bookData={currBook}
                />
              </WrapBook>
            ))}
        </div>
      )}
    </Container>
  );
};

export default BookList;
