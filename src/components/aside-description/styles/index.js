import styled from "styled-components";

export const AsideContainer = styled.div`
  min-width: 200px;
  max-width: 300px;
  height: 158px;
  overflow-y: scroll;
  background-color: #fff0f0;
  margin-left: 5px;

  .aside-content {
    margin: 5px;
    width: 300px;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
    min-width: 315px;
  }
`;
