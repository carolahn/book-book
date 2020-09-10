import styled from 'styled-components'
import backgroundImage from '../../../assets/images/background-image/background-covers.png'

export const Container = styled.div`
  width:100vw;
  height:100vh;
  
  background-image: url(${backgroundImage});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover ;
  background-repeat: no-repeat;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 20vw 15vw 30vw 15vw 20vw;

  @media (max-width: 1024px) {
    grid-template-rows: 10vh 3fr 10vh;
    grid-template-columns: 20vw 60vw 20vw;
  }

  @media (max-width: 420px) {
    grid-template-rows: 10vh 3fr 10vh;
    grid-template-columns: 10vw 80vw 10vw;
  }

`

export const StyledRegister = styled.div`

  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end:3;


  background-color: #fff;
  width:100%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius:10px;
  box-sizing: border-box;
  

  .serverResponse {
    color: #696969;
    font-size:20px;  
  }

  .error {
    color: crimson;
    display:flex;
    flex-direction: column;
  }

  .error:last-child {
    padding-bottom: 2.50rem;
  }

  .sucess {
    color: green;
  }

  h2{
    font-size: 48px;
    margin:1.25rem;
  }


  .formItem {
    width: 100%;
    display: flex;
    flex-direction: column;

    .ant-form-item-label{
      display: flex;
      
    }
    .ant-form-item-label label{
      font-size: 16px;
      
    }
  }

  .formRegister {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }

  
  

  .buttonRegister {
    width: 60%;
    margin: 1.25rem;
    margin-bottom: 2.50rem;
  }


  @media (max-width: 1024px) {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end:2;
  }

  @media (max-width: 420px) {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end:2;
  }

  @media (max-width: 280px) {
    
    .formRegister {
      width: 70%;
    }
  }


`