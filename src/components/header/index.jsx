import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { StyledHeader, Menu, LittleMenu } from './styled/styles';

const Header = () => {

    const [menu, setMenu] = useState(false);

    const history = useHistory();
    const location = useLocation();
    const where = location.pathname;

    const size = useWindowSize();

    return (
        <StyledHeader >
            <div className="logo-holder" />

            {where === '/' || where === '/register' ?
            
            <>
                {size.width > 560 ?
                <div className="button-holder" >
                <button className={where === '/' ? "login button here" : "login button"}
                    onClick={() => history.push("/")} >Login</button>
                <button className={where === '/register' ? "register button here" : "register button"}
                    onClick={() => history.push("/register")}
                >Register</button>
                </div> 
                :
                <div className="button-holder" >
                    <div className="menu-button"
                        onClick={() => setMenu((prevState) => !prevState)} />
                    {menu ?
                        <Menu>
                            <LittleMenu className="little-menu">
                                <button className={where === '/' ? "little-login hbtn" : "hbtn"}
                                        onClick={() => history.push("/")} >Login</button>
                                <button className={where === '/register' ? "little-register hbtn" : "hbtn"}
                                        onClick={() => history.push("/register")} >Register</button>
                            </LittleMenu>
                        </Menu>
                        :
                    <></>}
                </div>}
            </>
            : 
            <div></div>
            }
        </StyledHeader>
    )
}

export default Header;

function useWindowSize() {
  
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {  
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
  
    }, []);
  
    return windowSize;
  }
