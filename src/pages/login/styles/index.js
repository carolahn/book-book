import styled from 'styled-components';
import background_image from '../../../assets/images/background-image/background-covers.svg';
import logo from '../../../assets/images/header/logo/logo255.svg';

export const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background_image});
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 320px;
    border-radius: 25px;
    box-shadow: darkslateblue 2rem;
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

export const Header = styled.div`

    background-color: #545454;
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    .logo-holder {
        background-image: url(${logo});
        background-repeat: no-repeat;
        height: 40px;
        width: 255px;
        align-self: center;
        grid-column: 1;
    }

    .button-holder {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        align-self: center;
        grid-column: 2;
    }

    .button {
        height: 100%;
        background: #545454;
        margin-right: 1rem;
        border: none;
        color: #FFF;
        font-size:  28px;
    }

    .register {
        margin-right: 2rem;
    }

    .here {
        object-fit: cover;
        box-sizing: border-box;
        border-bottom: 4px solid #1890ff;
    }
`;