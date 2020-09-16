import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestReviews } from "../../redux/actions/reviews-list";
import BookList from "../../components/book-list";
import { ListContainer, Title } from "./styles.js";

/*
  Ainda não está 100% completo, pois falta o componente MostPopular (se for criado)
*/

const Timeline = () => {
  const [message, setMessage] = useState("Loading");
  const token = useSelector((state) => state.login.token);
  const booksReviews = useSelector((state) => state.reviewsList.booksReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestReviews(token));
  }, [token]);
  
  return (
    <ListContainer>
      <Title>Timeline</Title>
      {Object.values(booksReviews).length !== 0 ? (
        <BookList showBooks={Object.values(booksReviews)} type="timeline" />
      ) : (
        message
      )}
    </ListContainer>
  );
};

export default Timeline;
