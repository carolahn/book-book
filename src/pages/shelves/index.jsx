import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { StyledShelf, ShelvesButtons, BookShelf, Book } from './styles';

const Shelves = () => {

    const history = useHistory();
    const location = useLocation();

    const userBooks = useSelector(state => Object.values(state.userBooks));

    const whishlistShelf = userBooks.filter(e => e.shelf === 1);
    const readingShelf = userBooks.filter(e => e.shelf === 2);
    const readShelf = userBooks.filter(e => e.shelf === 3);

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
                        {whishlistShelf.map(e => <Book colour="darkgoldenrod" alt={e.title} src={e.image_url}  />)}
                    </BookShelf>
                </Route>
                <Route path="/my-shelves/reading" >
                    <BookShelf>
                        {readingShelf.map(e => <Book colour="darkred" alt={e.title} src={e.image_url}  />)}
                    </BookShelf>
                </Route>
                <Route path="/my-shelves/read" >
                    <BookShelf>
                        {readShelf.map(e => <Book colour="royalblue" alt={e.title} src={e.image_url}  />)}
                    </BookShelf>
                </Route>
            </Switch>
        </StyledShelf>
    )
}

export default Shelves;