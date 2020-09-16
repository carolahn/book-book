import styled from 'styled-components'

export const StyledBookInfo = styled.div`
  width:50vw;
  height: 80vh;
  background-color: #fff;
  display: grid;
  border-radius: 0.625rem;

  grid-template-columns: 8% 38% 8% 38% 8%;
  grid-template-rows: 10% 80% 10%;
  
  h2 {
    font-size: 16px;
    font-weight: bold;
  }

  .bookInfoContent {
    grid-column-start:2;
    grid-column-end: 2;
    grid-row-start:2;
    grid-row-end:2;


    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(20, 1fr);

    .bookCover {
      width: 128px;
      height: 170px;
      grid-column-start:1;
      grid-column-end:1;
      grid-row-start:1;
      grid-row-end:6;
      
    }

    .bookTitle {
      grid-column-start:2;
      grid-column-end:2;
      grid-row-start:1;
      grid-row-end:2;
    }

    .bookGrade {
      grid-column-start:2;
      grid-column-end:2;
      grid-row-start:3;
      grid-row-end:3;
    }

    .addToShelf {
      grid-column-start:2;
      grid-column-end:2;
      grid-row-start:5;
      grid-row-end:5;
    }
    
    .bookDescription {
      text-align: left;
      overflow:auto;
      grid-column-start:1;
      grid-column-end:3;
      grid-row-start:8;
      grid-row-end:19;
    }

    .bookNewFeedback {
      grid-column-start:1;
      grid-column-end:3;
      grid-row-start:20;
      grid-row-end:20;
    }
  }

  .feedbackContainer {
    overflow: auto;
    grid-column-start:4;
    grid-column-end: 4;
    grid-row-start:2;
    grid-row-end:2;
  }


  @media (max-width: 1700px) {
    width:60vw;
  }

  @media (max-width: 1366px) {
    width:70vw;
  }

  @media (max-width: 1280px) {
    width: 75vw;
  }

  @media (max-width: 1024px) {
    width:90vw;
    
    .bookInfoContent .bookDescription {
      overflow:auto;
      grid-column-start:1;
      grid-column-end:3;
      grid-row-start:6;
      grid-row-end:19;
    }

    .bookInfoContent .addToShelf {
      grid-column-start:2;
      grid-column-end:2;
      grid-row-start:4;
      grid-row-end:4;
    }
    
  }

  @media (max-width: 768px) {
    grid-template-columns: 5% 42% 6% 42% 5%;

    .bookInfoContent {
      .bookDescription {
        overflow:auto;
        grid-column-start:1;
        grid-column-end:3;
        grid-row-start:7;
        grid-row-end:19;
      }

      .addToShelf {
        grid-row-start:5;
        grid-row-end:5;
      }
    }
  }

  @media (max-width: 540px) {
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 5% 50% 5% 35% 5%;
    height: 1000px;
    
    .bookInfoContent {

      grid-template-rows: repeat(10, 1fr);
  
      .bookDescription {
        grid-column-start:1;
        grid-column-end:3;
        grid-row-start:6;
        grid-row-end:10;
      }

      .addToShelf {
        grid-row-start:4;
        grid-row-end:4;
      }

    }
  
    .feedbackContainer {
      overflow: auto;
      grid-column-start:2;
      grid-column-end: 2;
      grid-row-start:4;
      grid-row-end:4;
    }

  }

  @media (max-width: 420px) {
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 8% 60% 24% 8%;
    
    
    
    .bookInfoContent {
      
      grid-template-rows: repeat(10, 1fr);
  
      .bookDescription {
        overflow:auto;
        grid-column-start:1;
        grid-column-end:3;
        grid-row-start:5;
        grid-row-end:12;
        
      }

      .addToShelf {
        grid-row-start:3;
        grid-row-end:3;
        align-self: center;
        justify-self: center;
        
      }

      .bookGrade {
        grid-row-start: 2;
        grid-row-end: 2;
        align-self: center;
      }
    }
  
    .feedbackContainer {
      overflow:auto;
      grid-column-start:2;
      grid-column-end: 2;
      grid-row-start:3;
      grid-row-end:3;
    }
    
  }

  @media (max-width: 375px) {
    .bookInfoContent {
      grid-template-columns: 48% 6% 46%;

      .bookDescription {
        grid-column-start:1;
        grid-column-end:4;
        grid-row-start:4;
        grid-row-end:12;
        margin-top:1.25rem;
        
      }
      
      .bookTitle {
        grid-column-start:3;
        grid-column-end:3;
      }

      .addToShelf {
        grid-column-start:3;
        grid-column-end:3;
        align-self: center;
        justify-self: center;
        
      }

      .bookGrade {
        grid-column-start:3;
        grid-column-end:3;
        align-self: center;
      }
    }
  
    .feedbackContainer {
      overflow:auto;
      grid-column-start:2;
      grid-column-end: 2;
      grid-row-start:3;
      grid-row-end:3;
    }
    }
  }
 
  

`

export const ModalContainer = styled.div`
  width:100vw;
  height:100vh;
  background-color: rgba(0,0,0,.5);
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

