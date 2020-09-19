import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Pagination } from "antd";
import { PerfilContainer, SvgContainer, Container, WrapBook } from "./styled";
import Book from "../../components/book";
import { requestGoogleInfo } from "../../redux/actions/reviews-list";
import AsideDescription from "../../components/aside-description";

const Perfil = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = useSelector((state) => state.login.token);
  const [user, setUser] = useState({});
  let filtered = {};
  const [profileBooks, setprofileBooks] = useState({});
  const [profileBooksData, setProfileBooksData] = useState([]);

  const [page, setPage] = useState(1);
  const size = useWindowSize();

  const handleOnChange = (page) => {
    document.documentElement.scrollTop = 0;
    setPage(page);
  };

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
        setprofileBooks(filtered);
        setProfileBooksData(Object.values(filtered));
        setUser({ ...user, books: data });
      });
  }, [user]);

  useEffect(() => {
    dispatch(requestGoogleInfo(profileBooks, page));
  }, [page, user]);
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
        <div className="books-container">
          {user.books &&
            (user.books.length > 0 ? (
              // BookListPaginated
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Pagination
                  defaultCurrent={page}
                  current={page}
                  total={profileBooksData.length}
                  onChange={(page) => handleOnChange(page)}
                  showSizeChanger={false}
                  size={size.width < 745 ? "small" : "default"}
                />

                <Container>
                  {size.width < 627 && (
                    <div>
                      {profileBooksData
                        .slice((page - 1) * 10, (page - 1 + 10) * 10)
                        .map((currBook) => (
                          <WrapBook key={currBook.id}>
                            <Book bookData={currBook} type="timeline-mobile" />
                          </WrapBook>
                        ))}
                    </div>
                  )}

                  {size.width >= 627 && (
                    <div>
                      {profileBooksData
                        .slice((page - 1) * 10, (page - 1) * 10 + 10)
                        .map((currBook, key) => (
                          <WrapBook key={key}>
                            <Book bookData={currBook} type="timeline-desktop" />
                            <AsideDescription
                              className="aside-description"
                              type="timeline-desktop"
                              description={currBook.description}
                              review={currBook.review}
                              bookData={currBook}
                            />
                          </WrapBook>
                        ))}
                    </div>
                  )}
                </Container>

                <Pagination
                  defaultCurrent={page}
                  current={page}
                  total={profileBooksData.length}
                  onChange={(page) => handleOnChange(page)}
                  showSizeChanger={false}
                  size={size.width < 745 ? "small" : "default"}
                />
              </div>
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
