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
  }
  .aside-pop:before {
    content: "";
    width: 312px;
    height: 158px;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 44px, #ff914d);
    z-index: 0;
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
  z-index: 10;

  .bookImage {
    z-index: 10;
  }

  .book-info-aside {
    z-index: 10;
  }
`;
