import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { StyledHeader } from './styled/styles';

const Header = () => {

    const history = useHistory();
    const location = useLocation();
    const where = location.pathname;

    return (
        <StyledHeader >
            <div className="logo-holder" />
            <div className="button-holder" >

                <button className={where === '/' ? "login button here" : "login button"}
                    onClick={() => history.push("/")} >Login</button>
                <button className={where === '/register' ? "register button here" : "register button"}
                    onClick={() => history.push("/register")}
                >Register</button>
            </div>
        </StyledHeader>
    )
}

export default Header;