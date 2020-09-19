import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledBookInfo, ModalContainer } from "./styles/";
import { Button, Rate, Select } from "antd";
import Feedback from "../feedback";
import { DeleteTwoTone } from "@ant-design/icons";
import FeedbackForm from "../feedback-form";
import { requestReviews } from "../../redux/actions/reviews-list";
import { putBookChanges, requestUsersBookDescription } from "../../redux/actions/user-books";


const BookInfo = ({
  title,
  author,
  image,
  description,
  addFeedback,
  grading,
  handleModal,
  onChange,
  googleBookId,
  bookId,
}) => {
  
  const dispatch = useDispatch();
  const [feedbackForm, setFeedbackForm] = useState(false);
 
  const token = useSelector((state) => state.login.token);
  const userId = useSelector((state) => state.login.id);
  const booksReviewsById = useSelector((state) => state.reviewsList.booksReviewsById)
  
  useEffect(() => {
    dispatch(requestReviews(token));
    dispatch(requestUsersBookDescription(googleBookId))
  }, [ token]);

  const { Option } = Select;

  const onFinish = (event) => {
    console.log(event)
    setFeedbackForm(false);
    dispatch(putBookChanges(token, userId, bookId, 3, event.grading, event.comment));

  };
  
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
          <div className='topContent'>
            <img src={image} className="bookCover" />
            <h2 className="bookTitle">{title}</h2>
            <h5 className='bookAuthor'>{author}</h5>
            <Rate
              disabled
              allowHalf
              defaultValue={grading}
              style={{ fontSize: 15, display: "revert" }}
              className="bookGrade"
            />
            <Select
              className="addToShelf"
              style={{ width: "100%" }}
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

          <p className="bookDescription">
            {description}
          </p>
          

          {addFeedback && (
            <Button className="bookNewFeedback" onClick={handleNewFeedback}>
              New Feedback
            </Button>
          )}
        </section>
           
        <section className="feedbackContainer">
          <h2>Feedbacks</h2>
          {feedbackForm ? (
            <FeedbackForm handleFinish={onFinish} />
            
          ) : (
            Object.values(booksReviewsById).map((bookReview) =>
              bookReview.title === title ? (
                <Feedback
                  key={bookReview.id}
                  user={bookReview.creator.name}
                  grading={bookReview.grade}
                  comment={bookReview.review}
                />
              ) : null
            )
          )}
        </section>
      </StyledBookInfo>
    </ModalContainer>
  );
};

export default BookInfo;
