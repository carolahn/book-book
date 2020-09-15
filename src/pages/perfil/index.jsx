import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import BookList from "../../components/book-list";

import { PerfilContainer, SvgContainer } from "./styled";

const Perfil = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.login.token);
  const [user, setUser] = useState({});
  const size = useWindowSize();

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
        <SvgContainer>
          {size.width > 680 && <svg height="100" width="100" />}
          <h1 className="title">
            <div>{user.name}'s shelf</div>
            <div>({user.user})</div>
          </h1>
        </SvgContainer>
        <div>
          {user.books &&
            (user.books.length > 0 ? (
              <BookList showBooks={user.books} type="timeline" />
            ) : (
              "User has not finished reading any books"
            ))}
        </div>
      </PerfilContainer>
    )
  );
};

export default Perfil;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
