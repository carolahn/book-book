import React from "react";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { MainContainer, WrapBook } from "./styles";
import Book from "../book";

const CarouselMostPopular = () => {
  const mostPopular = useSelector((state) => state.reviewsList.mostPopular);

  const contentStyle = {
    height: "190px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    // background: "rgba(255,145,77,0.3)",
  };

  return (
    <MainContainer className="carousel">
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <WrapBook
              key={Object.values(mostPopular)[0].id}
              className="carousel-0-pop"
            >
              <Book
                bookData={Object.values(mostPopular)[0]}
                key={Object.values(mostPopular)[0].title}
                type="aside"
              />
            </WrapBook>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <WrapBook
              key={Object.values(mostPopular)[1].id}
              className="carousel-1-pop"
            >
              <Book
                bookData={Object.values(mostPopular)[1]}
                key={Object.values(mostPopular)[1].title}
                type="aside"
              />
            </WrapBook>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <WrapBook
              key={Object.values(mostPopular)[2].id}
              className="carousel-2-pop"
            >
              <Book
                bookData={Object.values(mostPopular)[2]}
                key={Object.values(mostPopular)[2].title}
                type="aside"
              />
            </WrapBook>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <WrapBook
              key={Object.values(mostPopular)[3].id}
              className="carousel-3-pop"
            >
              <Book
                bookData={Object.values(mostPopular)[3]}
                key={Object.values(mostPopular)[3].title}
                type="aside"
              />
            </WrapBook>
          </div>
        </div>
      </Carousel>
    </MainContainer>
  );
};

export default CarouselMostPopular;
