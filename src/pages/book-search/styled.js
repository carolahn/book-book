import styled from "styled-components";

export const BookSearchContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-top: 65px;
`;

export const InputContainer = styled.div`
  width: 60%;
  min-width: 515px;
  .ant-btn-primary {
    background: #68c866;
    border-color: #68c866;
  }

  @media screen and (max-width: 560px) {
    width: 95%;
    min-width: 95%;
  }
`;

export const MainContainer = styled.div`
  /* width: 60%; */
  min-width: 515px;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 61% 39%;

  @media screen and (max-width: 560px) {
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const ResultsContainer = styled.div`
  background-color: red;
  grid-column: 1;
  min-width: 315px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 560px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const MostPopularContainer = styled.div`
  height: 200px;
  background-color: pink;
  grid-column: 2;
  min-width: 200px;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const MostPopularCarousel = styled.div`
  height: 150px;
  background-color: pink;
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledControl = styled.div`
  padding: 10px;
  max-width: 500px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
