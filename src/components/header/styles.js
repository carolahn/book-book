import styled from 'styled-components';
import logo from '../../assets/images/header/logo/logo255.svg';
import menu from '../../assets/images/header/menu/menu.svg';

export const StyledHeader = styled.div`
    background-color: #2f3942;
    /* background-color: #545454; */
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    
    .logo-holder {
        background-image: url(${logo});
        background-repeat: no-repeat;
        height: 40px;
        width: 190px;
        align-self: center;
        grid-column: 1;
        justify-self: flex-start;
        align-self: center;
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
        background: transparent;
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

    .logout {
        margin-right: 1rem;
    }

    .menu-button {
        background-image: url(${menu});
        width: 30px;
        height: 25px;
        margin-right: 1.8rem;
    }

    @media screen and (max-width: 560px) {

    }
`;

export const Menu = styled.div`
    position: absolute;
    z-index: 50;
    top: 50px;
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: flex-start;

`;

export const LittleMenu = styled.div`
    margin: 0.2rem;
    width: 150px;
    height: 85px !important;
    background-color: whitesmoke;
    z-index: 50;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;

    .hbtn {
        border: none;
        background-color: whitesmoke;
    }

    .little-login, .little-register, .little {
        border-bottom: 2px solid #1890ff;
    }
`;

export const LoggedLittleMenu = styled.div`
    margin: 0.2rem;
    width: 150px;
    height: 150px !important;
    background-color: whitesmoke;
    z-index: 50;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;

    .hbtn {
        border: none;
        background-color: whitesmoke;
    }

    .little-login, .little-register, .little {
        border-bottom: 2px solid #1890ff;
    }
`;