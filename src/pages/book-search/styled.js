import styled from "styled-components";

export const BookSearchContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-top: 65px;
`;

export const InputContainer = styled.div`
  width: 60%;
  min-width: 300px;
  .ant-btn-primary {
    background: #68c866;
    border-color: #68c866;
  }

  @media screen and (max-width: 560px) {
    width: 95%;
  }
`;

export const MainContainer = styled.div`
  width: 60%;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 70% 30%;

  @media screen and (max-width: 560px) {
    width: 95%;
    display: flex;
    flex-direction: column;
  }
`;

export const ResultsContainer = styled.div`
  background-color: red;
  grid-column: 1;
  height: 200px;
`;

export const MostPopularContainer = styled.div`
  height: 200px;
  background-color: pink;
  grid-column: 2;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const MostPopularCarousel = styled.div`
  height: 150px;
  background-color: pink;
`;
