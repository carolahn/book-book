import React, { useState } from "react";

import { Container, WrapBook } from "./styles";
import { Pagination } from "antd";
import Book from "../book";
import AsideDescription from "../aside-description";

/*
    Para utilizar este componente, deve-se passar um ARRAY com os ítens já normalizados!
    Se quiser que apareça a paginação deve descomentar tudo menos esse texto!

    Obs: já está responsivo!
*/

const BookList = ({ showBooks, section, getMorePages }) => {
  const [page, setPage] = useState(1);

  const handleOnChange = (pag) => {
    setPage(pag);
    if (section === "search") {
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
        {section === "timeline" ? (
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
              /*.slice(page - 1, page - 1 + 10)*/
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
              /*.slice(page - 1, page - 1 + 10)*/
            }
          </div>
        ) : (
          <div>
            se section for most popular -> não tem aside; se for user -> são os
            reviews; se for feedback -> formulario de feedbacks
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
