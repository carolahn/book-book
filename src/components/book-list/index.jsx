import React, { useState } from "react";

import { Container } from "./styled";
// import { Pagination } from "antd";
import Book from "../book";

/*
    Para utilizar este componente, deve-se passar um ARRAY com os ítens já normalizados!
    Se quiser que apareça a paginação deve descomentar tudo menos esse texto!

    Obs: já está responsivo!
*/

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
          {
            showBooks.map((currBook, key) => (
              <Book bookData={currBook} key={key} />
            ))
            /*.slice(page - 1, page - 1 + 10)*/
          }
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
