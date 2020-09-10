import styled from 'styled-components';
import logo from '../../../assets/images/header/logo/logo255.svg';

export const StyledHeader = styled.div`

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