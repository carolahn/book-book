import React from "react";

import { Container, WrapBook } from "./styles.js";
import Book from "../book";
import AsideDescription from "../aside-description";

interface CurrBookType {
  description: string;
  review: string;
}

interface DisplayProps {
  showBooks: CurrBookType[];
  type: string;
  page: number;
  size: { width: number };
}

const BookList: React.FC<DisplayProps> = ({ showBooks, type, page = 1, size }) => {
  return (
    <Container>
      {showBooks.length !== 0 ? (
        <div>
          {showBooks
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((currBook, key: number) => (
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
      ) : "This page has no books!"}
    </Container>
  );
};

export default BookList;
