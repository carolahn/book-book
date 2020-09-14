import styled from "styled-components";

export const BookSearchContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-top: 65px;
  min-width: 315px;
`;

export const InputContainer = styled.div`
  width: 60%;
  min-width: 315px;
  .ant-btn-primary {
    background: #68c866;
    border-color: #68c866;
  }

  @media screen and (max-width: 560px) {
    width: 95%;
    min-width: 315px;
  }
`;

export const MainContainer = styled.div`
  /* min-width: 515px; */
  margin: 0 auto;
  margin-top: 15px;
  display: grid;
  /* grid-template-columns: 515px 200px; */

  @media screen and (max-width: 560px) {
    width: 100%;
    min-width: 315px;
    display: flex;
    flex-direction: column;
  }
`;

export const ResultsContainer = styled.div`
  /* background-color: red; */
  grid-column: 1;
  min-width: 315px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media screen and (max-width: 560px) {
    width: 100%;
    min-width: 315px;
  }
`;

export const MostPopularContainer = styled.div`
  height: 200px;
  background-color: pink;
  grid-column: 2;
  width: 200px;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const MostPopularCarousel = styled.div`
  height: 150px;
  background-color: pink;
  width: 100%;
  min-width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
