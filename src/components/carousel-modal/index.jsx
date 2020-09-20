import React, { useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import Book from "../book";
import BookInfo from "../book-info";
import { StyledModalCarousel, StyledModal } from "./styles";

const CarouselModal = ({ currBook, type }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <StyledModalCarousel className="carousel-modal">
      <div type="primary" onClick={showModal}>
        <img src={currBook.image_url} alt="cover" className="bookCover" />
      </div>
      <StyledModal
        visible={visible}
        // title="Title"
        // onOk={this.handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        <Book bookData={currBook} type="carousel" />
      </StyledModal>
    </StyledModalCarousel>
  );
};

export default CarouselModal;
