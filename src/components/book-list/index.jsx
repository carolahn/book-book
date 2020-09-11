import React, { useState } from "react";

import { Container } from "./styled";
import { Pagination } from "antd";
import Book from "../book";

const BookList = ({ showBooks }) => {
//   const [page, setPage] = useState(1);

  return (
    <>
      {/* <Pagination
        defaultCurrent={page}
        current={page}
        total={showBooks.length}
        onChange={(pag) => setPage(pag)}
        showSizeChanger={false}
      /> */}
      <Container>
        <div>
          {showBooks
            .map((currBook, key) => <Book data={currBook} key={key} />)
            /*.slice(page - 1, page - 1 + 10)*/}
        </div>
      </Container>
      {/* <Pagination
        defaultCurrent={page}
        current={page}
        total={showBooks.length}
        onChange={(pag) => setPage(pag)}
        showSizeChanger={false}
      /> */}
    </>
  );
};

export default BookList;
