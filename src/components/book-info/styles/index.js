import styled from 'styled-components'

const StyledBookInfo = styled.div`
  margin: 50px auto;
  width:50vw;
  height: 80vh;
  background-color: #fff;
  display: grid;
  border-radius: 0.625rem;

  grid-template-columns: 8% 38% 8% 38% 8%;
  grid-template-rows: 10% 80% 10%;
  

  .bookInfoContent {
    grid-column-start:2;
    grid-column-end: 2;
    grid-row-start:2;
    grid-row-end:2;


    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(20, 1fr);



    .bookCover {
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
      grid-row-start:4;
      grid-row-end:4;
    }

    .bookButtonShelf {
      grid-column-start:2;
      grid-column-end:2;
      grid-row-start:5;
      grid-row-end:5;
    }
    
    .bookReview {
      grid-column-start:1;
      grid-column-end:3;
      grid-row-start:7;
      grid-row-end:18;
    }

    .bookNewFeedback {
      grid-column-start:1;
      grid-column-end:3;
      grid-row-start:18;
      grid-row-end:20;
    }
  }

  .feedbackList {
    grid-column-start:4;
    grid-column-end: 4;
    grid-row-start:2;
    grid-row-end:2;
  }



`

export default StyledBookInfo