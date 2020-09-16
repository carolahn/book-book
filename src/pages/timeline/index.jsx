import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestReviews } from "../../redux/actions/reviews-list";
import BookListPaginated from "../../containers/book-list-paginated";
import { ListContainer, Title } from "./styles.js";

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
        <BookListPaginated showBooks={Object.values(booksReviews)} type="timeline" />
      ) : (
        message
      )}
    </ListContainer>
  );
};

export default Timeline;
