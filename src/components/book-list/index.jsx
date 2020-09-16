import React from "react";

import { Container, WrapBook } from "./styles.js";
import Book from "../book";
import AsideDescription from "../aside-description";

const BookList = ({ showBooks, type, page, size }) => {
  return (
    <Container>
      <div>
        {showBooks
          ? showBooks.slice(page * 10 - 10, page * 10).map((currBook) => (
              <WrapBook key={currBook.id}>
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
            ))
          : "User has no books in his shelf"}
      </div>
    </Container>
  );
};

export default BookList;
