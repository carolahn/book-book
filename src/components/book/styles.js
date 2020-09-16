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
    width: 128px;
    height: 144px;
  }

  .bookImage {
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
    /* line-height: 15px; */
    color: #777777;
  }

  div.description p {
    /* line-height: 12px; */
    padding: 0;
    margin: 0;
  }

  div.description-search-desktop {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div.description-search-mobile {
    line-height: 15px;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  }

  div.description-timeline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div.book-info-aside {
    grid-column: 2;
    grid-row: 1/4;
    font-size: 12px;
    line-height: 13px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    /* justify-content: center; */
  }

  div.book-info-aside p {
    margin: 0;
    padding: 0;
  }

  div.grade {
    grid-column: 2;
    grid-row: 4;
    height: 20px;
    line-height: 20px;
    text-align: right;
    margin: 0;
    padding: 0;
    pointer-events: none;
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
