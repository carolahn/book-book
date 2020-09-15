import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { StyledShelf, ShelvesButtons, BookShelf, Book } from './styles';

const Shelves = () => {

    const history = useHistory();
    const location = useLocation();

    const where = location.pathname;

    return (
        <StyledShelf className="shelf">
            <ShelvesButtons>
                <button onClick={() => history.push("/my-shelves/whishlist")}
                        className={where === "/my-shelves/whishlist" ? 'here' : ''} >Wishlist</button>
                <button onClick={() => history.push("/my-shelves/reading")} id="rbutton"
                        className={where === "/my-shelves/reading" ? 'here' : ''} >Reading</button>
                <button onClick={() => history.push("/my-shelves/read")}
                        className={where === "/my-shelves/read" ? 'here' : ''} >Read</button>
            </ShelvesButtons>
            <Switch>
                <Route path="/my-shelves/whishlist">    
                    <BookShelf>
                        {Array.from({length: 100}, (_, i) => <Book colour="darkgoldenrod" />).map(e => e)}
                    </BookShelf>
                </Route>
                <Route path="/my-shelves/reading" >
                    <BookShelf>
                        {Array.from({length: 100}, (_, i) => <Book colour="darkred" />).map(e => e)}
                    </BookShelf>
                </Route>
                <Route path="/my-shelves/read" >
                    <BookShelf>
                        {Array.from({length: 100}, (_, i) => <Book colour="royalblue" />).map(e => e)}
                    </BookShelf>
                </Route>
            </Switch>
        </StyledShelf>
    )
}

export default Shelves;