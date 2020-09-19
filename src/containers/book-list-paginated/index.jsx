import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestGoogleInfo } from "../../redux/actions/reviews-list";

import { Pagination } from "antd";

import BookList from "../../components/book-list";
/*
    Para utilizar este componente, deve-se passar um ARRAY com os ítens já normalizados!
    Se quiser que apareça a paginação deve descomentar tudo menos esse texto!

    Obs: já está responsivo!
    
*/

const BookListPaginated = ({ showBooks, type }) => {
  const dispatch = useDispatch();
  const booksReviews = useSelector((state) => state.reviewsList.booksReviews);
  const [page, setPage] = useState(1);
  const size = useWindowSize();

  const handleOnChange = (page) => {
    document.documentElement.scrollTop = 0;
    setPage(page);
  };

  useEffect(() => {
    if (type.includes("timeline")) {
      console.log("booksReviews", booksReviews);
      dispatch(requestGoogleInfo(booksReviews, page));
    }
  }, [page]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Pagination
        defaultCurrent={page}
        current={page}
        total={showBooks.length}
        onChange={(page) => handleOnChange(page)}
        showSizeChanger={false}
        size={size.width < 745 ? "small" : "default"}
      />
      <BookList showBooks={showBooks} type={type} page={page} size={size} />
      <Pagination
        defaultCurrent={page}
        current={page}
        total={showBooks.length}
        onChange={(page) => handleOnChange(page)}
        showSizeChanger={false}
        size={size.width < 745 ? "small" : "default"}
      />
    </div>
  );
};

export default BookListPaginated;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerWidth,
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
