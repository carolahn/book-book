import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestReviews } from "../../redux/actions/reviews-list";
import BookList from "../../components/book-list";
import { ListContainer } from "./styles";

/*
    Ainda não está 100% completo, pois falta o componente MostPopular (se for criado)
*/

const Timeline = () => {
  const [message, setMessage] = useState("Loading");
  const token = useSelector((state) => state.login.token);
  const booksReviews = useSelector((state) => state.reviewsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestReviews(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <ListContainer>
      {booksReviews && Object.values(booksReviews).length !== 0 ? (
        <BookList showBooks={Object.values(booksReviews)} type="timeline" />
      ) : (
        message
      )}
      {/* <MostPopular>
      {showScreen(
        reduce(
          showBooks.filter((currBook) => {
            if (!currBook.grade || currBook.grade !== 5) return false;
            return true;
          })
        )
      )}
    </MostPopular> */}
    </ListContainer>
  );
};

export default Timeline;
