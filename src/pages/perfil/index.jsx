import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import BookList from "../../components/book-list";

import { PerfilContainer } from "./styled";

const Perfil = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.login.token);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://ka-users-api.herokuapp.com/users/${id}/`, {
        headers: { Authorization: token },
      })
      .then(({ data }) => {
        setUser(data);
      });
  }, []);

  useEffect(() => {
    if (!user.name || user.books) return;

    axios
      .get(`https://ka-users-api.herokuapp.com/users/${id}/books`, {
        headers: { Authorization: token },
      })
      .then(({ data }) => {
        setUser({ ...user, books: data });
      });
  }, [user]);

  return (
    user.name !== undefined && (
      <PerfilContainer>
        <h1>
          Books read by {user.name} ({user.user})
        </h1>
        {user.books &&
          (user.books.length > 0 ? (
            <BookList showBooks={user.books} type="timeline" />
          ) : (
            "User has not finished reading any books"
          ))}
      </PerfilContainer>
    )
  );
};

export default Perfil;
