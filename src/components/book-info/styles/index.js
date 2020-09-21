import styled from "styled-components";

export const StyledBookInfo = styled.div`
  width:50vw;
  height: 90%;
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
    line-height:20px;
  }

  

  .bookInfoContainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    

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
        width: 100%;
        height: 100%;
        grid-column-start:2;
        grid-column-end:2;
        grid-row-start:1; 
        grid-row-end:1;
        align-self: start;
        overflow: hidden;

        .bigTitle {
          font-size: 16px;
          line-height: 22px;
        }
        
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

    .bookNewFeedback {
      width: 70%;
      align-self: center;
    }
    
    .noDescription {
      width: 70%;
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
      align-self: center;
    }
  }
  
  .feedbackContainer {
    width:40%;
    display: flex;
    flex-direction: column;
    
    overflow: auto;

    .noFeedback {
      width: 80%;
      margin-left: 10%;
      margin-top: 10%;
    }

    .feedbackForm {
      font-weight: bold;


      .ant-form-item{
        display: flex;
        flex-direction: column;
        

        .ant-form-item-label {
          text-align: left;
        }
      }

      .feedbackFormSubmit {
        width: 70%;
        margin-left: 15%;
      }
    }
  }


  @media (max-width: 1368px) {

    width: 70vw;

    .bookInfoContainer {

      .noDescription {
        width: 50%;
        margin-top: 2.50rem;
        margin-bottom: 2.50rem;
      }
    }

    
  }

  @media (max-width: 1024px) {
    width: 80vw;

    .bookInfoContainer {
      .topContent {
        .bookTitle {
          line-height: 20px;
        }

        .bookCover {
          width: 110px;
          height: 164px;
        }
      }

      .noDescription {
        width: 60%;
      }
    }
    
  }
  
  @media (max-width: 540px) {
    width: 90vw;
    height: 80%;
    padding: 1.25rem;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    height: 100%;
    .bookInfoContainer {
      width: 80%;
      .topContent {
        .bookTitle {
          font-size: 16px;
          line-height: 21px;
        }
      }
    
    }

    .feedbackContainer {
      margin-top: 2.50rem;
      width: 70%;
      align-self: center;
      overflow: visible;
    }
  }

  @media (max-width: 420px) {

    .bookInfoContainer {
      height: 80%;

      .topContent {
        grid-template-columns: 100px 3fr;

        .bookCover {
          width: 100px;
          height: 144px;
        }
      }

      .bookDescription {
        height: 45%;
      }
    }

    .feedbackContainer {
      margin-top: 1.25rem;

      .noFeedback {
        margin-top: 10%;
      }
    }
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
