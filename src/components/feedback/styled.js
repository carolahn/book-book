import styled from 'styled-components'

export const StyledFeedback  = styled.div`
  width: 95%;
  margin: 0.625rem 0.625rem 0.625rem 0;
  text-align: left;
  padding: 0.625rem;
  border-radius: 10px;
  background-color: #e6e6e6;

  p{
    padding: 0.625rem;
    overflow: hidden;
  }

  .feedbackGrade {
    display:flex;
    justify-content: center;
  }

  
` 

export const ContainerFeedback = styled.div`

  .titleFeedback {
    font-size:24px;
    margin: 1.25rem;
    margin-top:0;
  }

  @media (max-width: 420px) {
    .titleFeedback {
      font-size:18px;
    }
  }
  `