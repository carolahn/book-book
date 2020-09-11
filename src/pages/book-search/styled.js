import styled from "styled-components";

export const BookSearchContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

export const InputContainer = styled.div`
  width: 60%;
  .ant-btn-primary {
    background: #68c866;
    border-color: #68c866;
  }
`;

export const MainContainer = styled.div`
  width: 60%;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 70% 30%;
`;

export const ResultsContainer = styled.div`
  background-color: red;
  grid-column: 1;
`;

export const MostPopularContainer = styled.div`
  height: 200px;
  background-color: pink;
  grid-column: 2;
`;
