import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  requestReviews,
  requestGoogleInfo,
} from "../../redux/actions/reviews-list";
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
    // CAROL - retirei essa parte e passei para a store
    // axios
    //   .get("https://ka-users-api.herokuapp.com/book_reviews", {
    //     headers: {
    //       Authorization: `${token}`,
    //     },
    //   })
    //   .then(({ data }) => {
    //     const normalized = {};
    //     data.map((currReview) => {
    //       normalized[currReview.id] = { ...currReview };
    //     });
    //     setBooksReviews(normalized);
    //   })
    //   .catch((e) => {
    //     const errorstatus = e.response.status;
    //     console.log("Erro: ", errorstatus);
    //   });
    // dispatch(requestReviews(token)); COLOCAR DE VOLTA!!!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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

  // useEffect(() => {
  //   dispatch(requestGoogleInfo(booksReviews));
  // }, [booksReviews, dispatch]);

  return (
    <ListContainer>
      {booksReviews && Object.values(booksReviews).length !== 0 ? (
        <BookList showBooks={Object.values(booksReviews)} section="timeline" />
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
