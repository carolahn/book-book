import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import BookList from "../../components/book-list";

import {PerfilContainer} from "./styled";

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

  console.log(user.name);

  return (
    user.name !== undefined && (
      <PerfilContainer>
        <h2>Name: {user.name}</h2>
        <h3>Email: {user.email}</h3>
        <div>
            <h3>Books read</h3>
            {user.books && (user.books.length > 0 ? <BookList showBooks={user.books} /> : "User has not finished reading any books")}
        </div>
      </PerfilContainer>
    )
  );
};

export default Perfil;