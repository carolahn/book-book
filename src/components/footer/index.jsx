import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const where = useLocation().pathname;

    
    return (
        <StyledFooter where={where}>
            <span>Made by "The Librarians":&nbsp;</span>
            <a href="https://www.linkedin.com/in/augusto-pietroski" rel="noopener noreferrer" target="_blank">Augusto Pietroski,</a>
            <a href="https://www.linkedin.com/in/carolina-ahn-35ab7473" rel="noopener noreferrer" target="_blank">Carolina Ahn,</a>
            <a href="https://www.linkedin.com/in/cassiano-doederlein-648592148/" rel="noopener noreferrer" target="_blank">Cassiano Bitencourt,</a>
            <a href="https://www.linkedin.com/in/edu-magno/" rel="noopener noreferrer" target="_blank">Eduardo Magno</a>
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.div`
    width: 100%;
    height: 50px;
    background-color: #2f3942;
    margin-top: 50px;
    z-index: 15;
    color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        margin-right: 0.4rem;
    }

    @media screen and (min-width: 375px) and (max-width: 629px) {
        height: 100px;
        position: relative;
        display: flex;

        justify-content: center;
        align-items: center;

        a, span {
            text-align: center;
        }
    }

    @media screen and (max-width: 375px) {
        height: 225px;
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        a, span {
            margin: 0.4rem auto;
            text-align: center;
        }
    }
`;