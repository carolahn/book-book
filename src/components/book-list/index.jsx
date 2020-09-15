import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, WrapBook } from "./styles.js";
import { Pagination } from "antd";
import Book from "../book";
import AsideDescription from "../aside-description";
import { requestGoogleInfo } from "../../redux/actions/reviews-list";

/*
    Para utilizar este componente, deve-se passar um ARRAY com os ítens já normalizados!
    Se quiser que apareça a paginação deve descomentar tudo menos esse texto!

    Obs: já está responsivo!
    
*/

const BookList = ({ showBooks, /* getMorePages*/ type }) => {
  const dispatch = useDispatch();
  const booksReviews = useSelector((state) => state.reviewsList.booksReviews);
  const [page, setPage] = useState(1);
  const size = useWindowSize();

  const handleOnChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    if (type.includes("timeline")) {
      dispatch(requestGoogleInfo(booksReviews, page));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleClick = () => {
    console.log("teste");
    console.log(showBooks);
  };

  return (
    <>
      <Pagination
        defaultCurrent={page}
        current={page}
        total={showBooks.length}
        onChange={(page) => handleOnChange(page)}
        showSizeChanger={false}
      />
      <Container>
        {size.width < 745 && (
          <div>
            {showBooks.slice(page * 10 - 10, page * 10).map((currBook) => (
              <WrapBook key={currBook.id}>
                <Book
                  bookData={currBook}
                  type={type.concat("-mobile")}
                />
              </WrapBook>
            ))}
          </div>
        )}

        {size.width >= 745 && (
          <div>
            {showBooks.slice(page * 10 - 10, page * 10).map((currBook) => (
              <WrapBook key={currBook.id}>
                <Book
                  bookData={currBook}
                  type={type.concat("-desktop")}
                />
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
