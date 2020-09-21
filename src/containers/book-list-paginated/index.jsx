import React, { useState, useEffect } from "react";
import {  useDispatch } from "react-redux";
import { requestGoogleInfo } from "../../redux/actions/reviews-list";

import { Pagination } from "antd";

import { Container } from "./styled";
import BookList from "../../components/book-list";

/*
    Para utilizar este componente, deve-se passar um ARRAY com os ítens já normalizados!
    Se quiser que apareça a paginação deve descomentar tudo menos esse texto!

    Obs: já está responsivo!
*/

const BookListPaginated = ({ showBooks, type }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const size = useWindowSize();

  const handleOnChange = (page) => {
    document.documentElement.scrollTop = 0;
    setPage(page);
  };

  useEffect(() => {
      dispatch(requestGoogleInfo(showBooks, page));
  }, [page]);

  return Object.values(showBooks).length !== 0 ? (
    <Container>
      <Pagination
        defaultCurrent={page}
        current={page}
        total={Object.values(showBooks).length}
        onChange={(page) => handleOnChange(page)}
        showSizeChanger={false}
        size={size.width < 745 ? "small" : "default"}
      />
      <BookList showBooks={Object.values(showBooks)} type={type} page={page} size={size} />
      <Pagination
        defaultCurrent={page}
        current={page}
        total={Object.values(showBooks).length}
        onChange={(page) => handleOnChange(page)}
        showSizeChanger={false}
        size={size.width < 745 ? "small" : "default"}
      />
    </Container>
  ) : (
    "This page has no books!"
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
