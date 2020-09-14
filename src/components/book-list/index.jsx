import React, { useState, useEffect } from "react";

import { Container, WrapBook } from "./styles";
import { Pagination } from "antd";
import Book from "../book";
import AsideDescription from "../aside-description";

/*
    Para utilizar este componente, deve-se passar um ARRAY com os ítens já normalizados!
    Se quiser que apareça a paginação deve descomentar tudo menos esse texto!

    Obs: já está responsivo!
*/

const BookList = ({ showBooks, getMorePages, type }) => {
  const [page, setPage] = useState(1);
  const size = useWindowSize();

  const handleOnChange = (pag) => {
    setPage(pag);
    if (type.includes("search")) {
      getMorePages(pag);
    }
  };

  return (
    <>
      <Pagination
        defaultCurrent={page}
        current={page}
        total={showBooks.length}
        onChange={(pag) => handleOnChange(pag)}
        showSizeChanger={false}
      />
      <Container>
        {size.width < 560 && (
          <div>
            {
              showBooks.slice(page - 1, page - 1 + 10).map((currBook, key) => (
                <WrapBook>
                  <Book
                    bookData={currBook}
                    key={key}
                    type={type.concat("-mobile")}
                  />
                </WrapBook>
              ))
              /*.slice(page - 1, page - 1 + 10)*/
            }
          </div>
        )}

        {size.width >= 560 && (
          <div>
            {
              showBooks.slice(page - 1, page - 1 + 10).map((currBook, key) => (
                <WrapBook>
                  <Book
                    bookData={currBook}
                    key={key}
                    type={type.concat("-desktop")}
                  />
                  <AsideDescription
                    type={type.concat("-desktop")}
                    description={currBook.description}
                    review={currBook.review}
                    bookData={currBook}
                  />
                </WrapBook>
              ))
              /*.slice(page - 1, page - 1 + 10)*/
            }
          </div>
        )}

        {/* {section === "timeline" ? (
          <div>
            {
              showBooks.slice(page - 1, page - 1 + 10).map((currBook, key) => (
                <WrapBook>
                  <Book bookData={currBook} key={key} section={section} />
                  <AsideDescription
                    description={currBook.description}
                    review={currBook.review}
                    creator={currBook.creator.user}
                  />
                </WrapBook>
              ))
              
            }
          </div>
        ) : section === "search" ? (
          <div>
            {
              showBooks.slice(page - 1, page - 1 + 10).map((currBook, key) => (
                <WrapBook>
                  <Book bookData={currBook} key={key} section={section} />
                  <AsideDescription
                    description={currBook.description}
                    review={currBook.review}
                  />
                </WrapBook>
              ))
              
            }
          </div>
        ) : (
          <div>
            se section for most popular -> não tem aside; se for user -> são os
            reviews; se for feedback -> formulario de feedbacks
          </div>
        )} */}
      </Container>
      <Pagination
        defaultCurrent={page}
        current={page}
        total={showBooks.length}
        onChange={(pag) => handleOnChange(pag)}
        showSizeChanger={false}
      />
    </>
  );
};

export default BookList;

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
