import React, { useState } from "react";

import { Container } from "./styles";
// import { Pagination } from "antd";
import Book from "../book";

/*
    Para utilizar este componente, deve-se passar um ARRAY com os ítens já normalizados!
    Se quiser que apareça a paginação deve descomentar tudo menos esse texto!

    Obs: já está responsivo!
    
*/


const BookList = ({ showBooks }) => {
//   const [page, setPage] = useState(1);


const handleClick = () => {
  console.log('teste')
  console.log(showBooks)
}
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
            .map((currBook, key) => <Book data={currBook} key={key} handleClick={handleClick}/>)
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
