import styled from "styled-components";

export const Container = styled.div`
  margin: 5px;

  > div {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
  .aside-pop {
    position: relative;
    background: linear-gradient(transparent 44px, #ff914d);
    height: 158px;
    margin-bottom: 25px;
  }

  div.featured-books {
    text-align: center;
    font-weight: bolder;
    line-height: 32px;
    width: 312px;
    color: #545454;
    background-color: whitesmoke;
    margin-bottom: 5px;
    margin-left: -3px;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const WrapBook = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
`;
