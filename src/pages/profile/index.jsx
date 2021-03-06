import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import BookListPaginated from "../../containers/book-list-paginated";

import { PerfilContainer, SvgContainer } from "./styled";

const Profile = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.login.token);
  const [user, setUser] = useState({});
  let filtered = {};

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
        data.map((item) => (filtered[item.google_book_id] = item));
        setUser({ ...user, books: filtered });
      });
  }, [user]);

  return (
    user.name !== undefined && (
      <PerfilContainer>
        <SvgContainer>
          <svg height="100" width="100" />
          <h1 className="title">
            <div>{user.name}'s shelf</div>
            <div>({user.user})</div>
          </h1>
        </SvgContainer>
        <div>
          {user.books &&
            (Object.values(user.books).length > 0 ? (
              <BookListPaginated showBooks={user.books} type="timeline" />
            ) : (
              "User has not finished reading any books"
            ))}
        </div>
      </PerfilContainer>
    )
  );
};

export default Profile;
