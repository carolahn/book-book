import styled from "styled-components";

export const AsideContainer = styled.div`
  width: 300px;
  height: 158px;
  background-color: #fafafa;
  margin-left: 5px;

  .aside-content {
    margin: 5px;
    width: 275px;
  }

  .search {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .timeline {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    position: relative;
  }

  div.timeline:before {
    content: "";
    width: 300px;
    height: 158px;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 88px, white);
  }

  @media screen and (max-width: 560px) {
    display: none;
    /* width: 100%;
    min-width: 315px; */
  }
`;
