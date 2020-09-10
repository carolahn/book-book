import styled from 'styled-components';
import background_image from '../../../assets/images/background-image/background-covers.svg';

export const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background_image});
    background-size: cover !important;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 320px;
    border-radius: 25px;
    box-shadow: 2rem darkslateblue;
    background-color: whitesmoke;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    .login-button {
        width: 100% !important;
    }

    @media screen and (max-width: 440px) {
        width: 300px;
    }
`;