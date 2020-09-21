import React from "react";
import { StyledFeedback, ContainerFeedback } from "./styled";
import { Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Feedback = ({ bookReview, user, comment, grading }) => {
  // console.log("grading", grading);
  // console.log("bookReview", bookReview);
  return (
    <ContainerFeedback>
      <StyledFeedback>
        <h2>
          <UserOutlined style={{ fontSize: 30 }} /> {user}
        </h2>
        <hr />
        <p>{comment}</p>
        <hr />
        <Rate
          disabled
          allowHalf
          defaultValue={bookReview.grade} //adicionei
          style={{ fontSize: 15 }}
          className="feedbackGrade"
        />
      </StyledFeedback>
    </ContainerFeedback>
  );
};

export default Feedback;
