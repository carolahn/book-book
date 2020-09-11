import React from "react";

import { Container } from "./styled";
// import { Pagination } from "antd";

const BookList = ({ showBooks, Book }) => {
  const showScreen = (books) =>
    books.map((currBook, key) => <Book data={currBook} key={key} />);

  return (
    <Container>
      {/* <Pagination defaultCurrent={1} total={50} onChange={(pag) => {console.log(pag)}}/> */}
      <div>{showScreen(showBooks)}</div>
    </Container>
  );
};

export default BookList;
