import styled from "styled-components";

export const StyledBookInfo = styled.div`
  width:50vw;
  height: 80%;
  background-color: #fff;
  border-radius: 0.625rem;
  animation: modal .5s;
  display: flex;
  justify-content: space-between;
  padding: 2.50rem;

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px,0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  

  .bookInfoContainer {
    width: 50%;
    
    .topContent {
      display: grid;
      grid-template-columns: 128px 2fr;
      grid-column-gap: 1.25rem;
      grid-template-rows: repeat(4, 45px);
      

      .bookCover {
        width: 128px;
        height: 170px;
        margin-top: 5px;
        grid-column-start:1;
        grid-column-end:3;
        grid-row-start:1; 
        grid-row-end:3;
      }
      
      .bookTitle {
        grid-column-start:2;
        grid-column-end:2;
        grid-row-start:1; 
        grid-row-end:1;
        align-self: start;
        text-overflow: '...'
      }
      .bookAuthor {
        grid-column-start:2;
        grid-column-end:2;
        grid-row-start:2;       
        grid-row-end:2;
        font-style: italic;
      }

      .bookGrade {
        grid-column-start:2;
        grid-column-end:2;
        grid-row-start:3;       
        grid-row-end:3;
        align-self: center;
      }
      
      .addToShelf {
        grid-column-start:2;
        grid-column-end:2;
        grid-row-start:4;       
        grid-row-end:4;
        align-self: center;
      }
    }

    .bookDescription {
      text-align:left;
      height: 60%;
      margin: 1.25rem 0;
      overflow: auto;
    }
  }
  
  .feedbackContainer {
    width:40%;
    display: flex;
    flex-direction: column;
    
    overflow: auto;
  }

`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 111;
  

  @media (max-width: 420px) {
    
  } 
`;
