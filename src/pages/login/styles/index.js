import styled from 'styled-components';
import background_image from '../../../assets/images/background-image/background-covers.svg';

export const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background_image});
    background-size: cover !important;
    

    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    grid-template-columns: 20vw 15vw 30vw 15vw 20vw;

   @media (max-width: 420px) {
       grid-template-columns: 5vw 90vw 5vw;
   }
`;

export const LoginBox = styled.div`
    box-sizing: border-box;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    align-self: center;
    justify-self: center;

    width: 80%;
    
    border-radius: 10px;
    box-shadow: 2rem darkslateblue;
    background-color: #fff;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    .button-item {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 2.50rem;
    }

    .login-button {
        width: 100%;
    }

    .login-form {
        width:50%;
        
    }

    h1{
        font-size: 48px;
        margin:1.25rem;
      }

    @media screen and (max-width: 420px) {
        width: 100%;
        
       grid-column-start: 2;
       grid-column-end: 2;

       .login-form {
           width: 70%;
       }

       h1 {
           font-size: 36px;
       }
    }

    
`;