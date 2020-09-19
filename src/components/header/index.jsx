import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/login/index';

import { StyledHeader, Menu, LittleMenu, LoggedLittleMenu } from './styles.js';

const Header = () => {

    const [menu, setMenu] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const where = location.pathname;

    const tokenInfo = useSelector(state => state.login);

    const size = useWindowSize();

    return (
        <StyledHeader >
            <div className="logo-holder" onClick={() => history.push('/timeline')} />
            {(where === '/' || where === '/register') ? 
            <>
                {size.width > 895 ?
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
                                        onClick={() => {
                                            history.push("/");
                                            setMenu(false);
                                        }} >Login</button>
                                <button className={where === '/register' ? "little-register hbtn" : "hbtn"}
                                        onClick={() => {
                                            history.push("/register");
                                            setMenu(false);
                                        }} >Register</button>
                            </LittleMenu>
                        </Menu>
                        :
                    <></>}
                </div>}
            </>
            
            : 

            (tokenInfo.token && 
                (where === '/timeline' || where === '/search' || where.startsWith('/my-shelves') || where.startsWith('/profile'))) ? 
                
            <>
                {size.width > 895 ?
                <div className="button-holder" >
                    <button className={where === '/timeline' ? "button here" : "button"}
                    onClick={() => {
                        history.push("/timeline");
                        setMenu(false);
                    }} >Timeline</button>
                    <button className={where === '/search' ? "button here" : "button"}
                    onClick={() => {
                        history.push("/search");
                        setMenu(false);
                    }} >Search</button>
                    <button className={where.startsWith('/my-shelves') ? "button here" : "button"}
                    onClick={() => {
                        history.push("/my-shelves/reading");
                        setMenu(false);
                    }} >My Shelves</button>
                    <button className="button logout"
                        onClick={() => {
                            dispatch(logout());
                            history.push("/");
                            setMenu(false);
                        }} >Logout</button>
                </div> 
                :
                <div className="button-holder" >
                    <div className="menu-button"
                        onClick={() => setMenu((prevState) => !prevState)} />
                    {menu ?
                        <Menu onClick={() => setMenu(false)} >
                            <LoggedLittleMenu className="little-menu">
                                <button className={where === '/timeline' ? "little hbtn" : "hbtn"}
                                        onClick={() => {
                                            history.push("/timeline");
                                            setMenu(false);
                                        }} >Timeline</button>
                                <button className={where === '/search' ? "little hbtn" : "hbtn"}
                                        onClick={() => {
                                            history.push("/search");
                                            setMenu(false);
                                        }} >Search</button>        
                                <button className={where.startsWith('/my-shelves') ? "little hbtn" : "hbtn"}
                                        onClick={() => {
                                            history.push("/my-shelves/reading");
                                            setMenu(false);
                                        }} >My Shelves</button>
                                <button className={where === '/' ? "little-logout hbtn" : "hbtn"}
                                        onClick={() => {
                                            dispatch(logout());
                                            history.push("/");
                                            setMenu(false);
                                        }} >Logout</button>
                            </LoggedLittleMenu>
                        </Menu>
                        :
                    <></>}
                </div>}
            </>

            : 
            
            <>
                {size.width > 895 ?
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
                                        onClick={() => {
                                            history.push("/");
                                            setMenu(false);
                                        }} >Login</button>
                                <button className={where === '/register' ? "little-register hbtn" : "hbtn"}
                                        onClick={() => {
                                            history.push("/register");
                                            setMenu(false);
                                        }} >Register</button>
                            </LittleMenu>
                        </Menu>
                        :
                    <></>}
                </div>}
            </>
            
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