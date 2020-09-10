import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container } from "./styles";

import BookList from "../../components/book-list";

const Timeline = () => {
  const [booksReviews, setBooksReviews] = useState({});
  const token = useSelector((state) => state.token);

  useEffect(() => {
    axios
      .get("https://ka-users-api.herokuapp.com/book_reviews", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(({ data }) => {
        const normalized = {};
        data.map((currReview) => {
          normalized[currReview.id] = { ...currReview };
        });
        setBooksReviews(normalized);
      });
  }, []);

  return (
    <div>
      {Object.values(booksReviews).length !== 0 ? (
        <BookList showBooks={booksReviews} />
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Timeline;
