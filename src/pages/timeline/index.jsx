import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import BookList from "../../components/book-list";

import { ListContainer } from "./styles";

const Timeline = () => {
  const [booksReviews, setBooksReviews] = useState({});
  const [message, setMessage] = useState("Loading");
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
      })
      .catch((e) => {
        const errorstatus = e.response.status;
        console.log("Erro: ", errorstatus);
      });
  }, []);

  //   const reduce = (arr) => {
  //     // return vvv
  //     let ret = {};
  //     let newReturn = [];
  //     arr.forEach((currBook, _, arr) => {
  //       if (!ret[JSON.stringify(currBook.title)]) {
  //         ret[JSON.stringify(currBook.title)] = 1;
  //         newReturn.push({ ...currBook });
  //       } else ret[JSON.stringify(currBook.title)]++;
  //     });
  //
  //     ret = Object.keys(ret).filter((currBook) => ret[currBook] > 1);
  //
  //     return newReturn.filter((currBook) => ret.indexOf(`"${currBook.title}"`) !== -1);
  //   };

  return (
    <ListContainer>
      {Object.values(booksReviews).length !== 0 ? (
        <BookList showBooks={Object.values(booksReviews)} />
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
