import styled from "styled-components";

export const BookContainer = styled.div`
  margin: 0;
  margin-bottom: 10px;
  padding: 4px;
  width: 312px;
  background-color: white;
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 30px 16px 60px 20px 24px;
  box-sizing: border-box;
  color: black;
  text-align: left;
  column-gap: 4px;

  img {
    grid-column: 1;
    grid-row: 1/6;
    width: 100%;
    align-self: center;
  }
  div.title {
    grid-column: 2;
    grid-row: 1;
    height: 30px;
    font-size: 14px;
    line-height: 15px;
    overflow: hidden;
  }
  div.author {
    grid-column: 2;
    grid-row: 2;
    height: 16px;
    font-size: 12px;
    font-style: italic;
    line-height: 16px;
    margin: 0;
    overflow: hidden;
  }
  div.description {
    grid-column: 2;
    grid-row: 3;
    height: 60px;
    white-space: wrap;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 15px;
    color: #777777;
  }

  div.grade {
    grid-column: 2;
    grid-row: 4;
    height: 20px;
    line-height: 20px;
    text-align: right;
    margin: 0;
    padding: 0;
  }

  div.grade .ant-rate {
    margin-right: 4px;
  }

  .select-menu {
    margin: 0;
    grid-column: 2;
    grid-row: 5;
    display: grid;
    text-align: center;
  }

  .select-menu .ant-select {
    font-size: 12px;
  }

  .select-menu .ant-select-selector {
    background-color: #c4c4c4;
    font-weight: 600;
  }

  .select-menu .ant-select-selection-placeholder {
    opacity: 1;
  }

  .select-menu .ant-select-arrow {
    top: 13px;
    right: 15px;
  }
`;
