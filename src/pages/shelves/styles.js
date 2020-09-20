import styled from "styled-components";

export const StyledShelf = styled.div`
  margin: 0 auto;
  padding: 75px 0 0 0;
  widows: 90vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: calc(100% - 100px);

  .reset-btn {
    display: none;
  }
`;

export const ShelvesButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 25vw;
    height: 40px;
    border: 2px solid black;
    background: #c4c4c4;
    font-weight: bolder;
  }

  #rbutton {
    margin-left: 1px;
    margin-right: 1px;
  }

  .here {
    border: 4px solid black;
  }
`;

export const BookShelf = styled.div`
  margin: 25px;
  padding: 0 0 10px;
  width: calc(75vw + 2px);
  height: auto;
  background: transparent;
  align-self: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const Book = styled.img`
  width: 150px;
  height: 220px;
  margin: 10px 5px 0;
  background-color: ${(props) => props.colour};

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
