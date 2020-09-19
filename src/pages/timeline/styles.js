import styled from "styled-components";

export const ListContainer = styled.div`
  padding-top: 70px;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  width: 950px;
  margin: 0 auto;
  margin-top: 15px;
  display: grid;

  @media screen and (max-width: 940px) {
    width: 627px;
  }
  @media screen and (max-width: 627px) {
    width: 315px;
  }
`;

export const ResultsContainer = styled.div`
  grid-column: 1;
  width: 627px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 627px) {
    width: 315px;
  }
`;

export const MostPopularContainer = styled.div`
  grid-column: 2;
  width: 315px;
  margin-top: -5px;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;

export const MostPopularCarousel = styled.div`
  /* background-color: pink; */
  width: 100%;
  min-width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 940px) {
    width: 627px;
  }

  @media screen and (max-width: 627px) {
    width: 315px;
  }
`;
