import styled from "styled-components";

export const Container = styled.div`
  margin: 5px;

  > div {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
`;

export const WrapBook = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
`;