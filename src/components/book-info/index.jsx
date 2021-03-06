import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { StyledBookInfo, ModalContainer } from "./styles/";
import { Button, Rate, Select } from "antd";
import Feedback from "../feedback";
import { DeleteTwoTone } from "@ant-design/icons";
import FeedbackForm from "../feedback-form";
import { requestReviews } from "../../redux/actions/reviews-list";
import {
  putBookChanges,
  requestUserBooks,
} from "../../redux/actions/user-books";
import noDescription from "../../assets/images/book-info/nodescription.png";
import noFeedback from "../../assets/images/book-info/nofeedback.png";

const BookInfo = ({
  title,
  author,
  image,
  description,
  addFeedback,
  grading,
  handleModal,
  onChange,
  bookId,
}) => {
  const {
    location: { pathname },
  } = useHistory();

  const dispatch = useDispatch();
  const location = useLocation();
  const [feedbackForm, setFeedbackForm] = useState(false);
  const [feedbackMissing, setFeedbackMissing] = useState(false);
  const [selectedReviews, setSelectedReviews] = useState([]);

  const token = useSelector((state) => state.login.token);
  const userId = useSelector((state) => state.login.id);
  const booksReviewsById = useSelector(
    (state) => state.reviewsList.booksReviewsById
  );
  const userBooks = useSelector((state) => state.userBooks);
  const userBooksById = useSelector((state) => state.userBooksById);

  useEffect(() => {}, []);

  let shelf = "";
  Object.values(userBooks).map((book) => {
    if (book.title === title) {
      shelf = book.shelf;
    }
  });

  useEffect(() => {
    let arr = [];
    Object.values(booksReviewsById).map((bookReview) => {
      if (bookReview.title === title) {
        arr = arr.filter((item) => item.id !== bookReview.id);
        arr.push(bookReview);
      }
    });
    Object.values(userBooksById).map((bookReview) => {
      if (bookReview.title === title) {
        arr = arr.filter((item) => item.id !== bookReview.id);
        arr.push(bookReview);
      }
    });

    arr = arr.filter((item) => item.review !== null && item.review !== ""); //filtro de feeds vazios
    setSelectedReviews(arr);

    if (arr.length !== 0) {
      setFeedbackMissing(true);
    }
  }, [booksReviewsById, userBooksById]);

  const { Option } = Select;

  const onFinish = (event) => {
    setFeedbackForm(false);
    dispatch(
      putBookChanges(token, userId, bookId, shelf, event.grading, event.comment) //////
    );
    setTimeout(dispatch(requestReviews(token)), 200);
    setTimeout(dispatch(requestUserBooks(token, userId)), 200);
  };

  useEffect(() => {
    if (
      location.pathname === "/my-shelves/wishlist" ||
      location.pathname === "/my-shelves/reading" ||
      location.pathname === "/my-shelves/read"
    ) {
      dispatch(requestReviews(token));
    }
  }, [userBooks]);

  const handleNewFeedback = () => {
    if (feedbackForm === false) {
      setFeedbackForm(true);
    } else {
      setFeedbackForm(false);
    }
  };

  return (
    <ModalContainer
      className="modal-container"
      onClick={handleModal}
      id="modal-container"
    >
      <StyledBookInfo>
        <section className="bookInfoContainer">
          <div className="topContent">
            <img src={image} className="bookCover" />
            <div className="bookTitle">
              <h2 className={title.length > 29 ? "bigTitle" : undefined}>
                {title}
              </h2>
            </div>
            <h5 className="bookAuthor">{author}</h5>
            <Rate
              disabled
              allowHalf
              defaultValue={grading}
              style={{ fontSize: 10, display: "revert" }}
              className="bookGrade"
            />
            <Select
              className="addToShelf"
              style={{ width: "70%" }}
              size={"small"}
              placeholder="SHELF"
              optionFilterProp="children"
              onChange={onChange}
            >
              <Option value="1" style={{ paddingLeft: 37 }}>
                <span>Wishlist</span>
              </Option>
              <Option value="2" style={{ paddingLeft: 37 }}>
                <span>Reading</span>
              </Option>
              <Option value="3" style={{ paddingLeft: 37 }}>
                <span>Read</span>
              </Option>
              <Option value="delete" style={{ color: "#dd2e44" }}>
                <DeleteTwoTone
                  twoToneColor="#dd2e44"
                  style={{ marginRight: 10 }}
                />
                <span>Remove</span>
              </Option>
            </Select>
          </div>

          {description === undefined ? (
            <img src={noDescription} className="noDescription" />
          ) : (
            <p className="bookDescription">{description}</p>
          )}

          {addFeedback && (
            <Button className="bookNewFeedback" onClick={handleNewFeedback}>
              New Feedback
            </Button>
          )}
        </section>

        <section className="feedbackContainer" id="feedbackContainer">
          <h2 className="feedbackTitle">Feedbacks</h2>
          {feedbackForm ? (
            <FeedbackForm handleFinish={onFinish} />
          ) : selectedReviews.lenght != 0 ? (
            Object.values(selectedReviews).map((bookReview) => {
              return (
                <Feedback
                  bookReview={bookReview}
                  key={bookReview.id}
                  user={bookReview.creator.name}
                  grading={bookReview.grade}
                  comment={bookReview.review}
                />
              );
            })
          ) : (
            ""
          )}

          {feedbackMissing === false && (
            <img src={noFeedback} className="noFeedback" />
          )}
        </section>
      </StyledBookInfo>
    </ModalContainer>
  );
};

export default BookInfo;
