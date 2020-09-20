import React from "react";

import { Container, WrapBook } from "./styles.js";
import Book from "../book";
import AsideDescription from "../aside-description";

const BookList = ({
  showBooks,
  type,
  page = 1,
  size,
}) => {
  return (
    <Container>
      <div>
        {showBooks
          .slice((page - 1) * 10, (page - 1) * 10 + 10)
          .map((currBook, key) => (
            <WrapBook key={key}>
              {size.width < 745 ? (
                <Book bookData={currBook} type={type.concat("-mobile")} />
              ) : (
                <>
                  <Book bookData={currBook} type={type.concat("-desktop")} />
                  <AsideDescription
                    type={type.concat("-desktop")}
                    description={currBook.description}
                    review={currBook.review}
                    bookData={currBook}
                  />
                </>
              )}
            </WrapBook>
          ))}
      </div>
    </Container>
  );
};

export default BookList;
