import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { MainContainer, WrapBook } from "./styles";
import Book from "../book";
import { addToMostPopular } from "../../redux/actions/reviews-list";
import CarouselModal from "../carousel-modal";

const CarouselMostPopular = () => {
  const [mostPopBooks, setMostPopBooks] = useState([]);
  const mostPopular = useSelector((state) => state.reviewsList.mostPopular);
  const booksReviews = useSelector((state) => state.reviewsList.booksReviews);

  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.stringify(mostPopular) === "{}") {
      console.log("entrou");
      if (JSON.stringify(booksReviews) !== "{}") {
        const initialPopList = Object.values(booksReviews).filter(
          (item) => item.grade >= 3
        );

        let max = initialPopList.length;
        let randomArr = [];
        let num = 0;
        for (let i = 0; i < 10; i++) {
          num = getRandomInt(0, max);
          if (randomArr.includes(num)) {
            i--;
          } else {
            randomArr.push(num);
          }
        }

        let filteredPopList = initialPopList.filter((item, index) =>
          randomArr.includes(index)
        );
        let popList = {};
        filteredPopList.map((item) => (popList[item.google_book_id] = item));
        setMostPopBooks(popList);
        dispatch(addToMostPopular(popList));
      }
    }
  }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const contentStyle = {
    height: "190px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    // background: "rgba(255,145,77,0.3)",
  };

  return (
    <MainContainer className="carousel">
      {mostPopular && (
        <>
          <Carousel autoplay>
            <div>
              <div style={contentStyle}>
                <WrapBook
                  key={Object.values(mostPopular)[0].id}
                  className="carousel-0-pop"
                >
                  <CarouselModal
                    currBook={Object.values(mostPopular)[0]}
                    type="carousel"
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
                  <CarouselModal
                    currBook={Object.values(mostPopular)[1]}
                    type="carousel"
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
                  <CarouselModal
                    currBook={Object.values(mostPopular)[2]}
                    type="carousel"
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
                  <CarouselModal
                    currBook={Object.values(mostPopular)[3]}
                    type="carousel"
                  />
                </WrapBook>
              </div>
            </div>
          </Carousel>
        </>
      )}
    </MainContainer>
  );
};

export default CarouselMostPopular;
