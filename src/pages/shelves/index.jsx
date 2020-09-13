import React from 'react';
import styled from 'styled-components';

const Shelves = () => {
    return (
        <StyledShelf className="shelf">
            <ShelvesButtons>
                <button>Wishlist</button>
                <button id="rbutton">Reading</button>
                <button>Read</button>
            </ShelvesButtons>
            <BookShelf>
                {Array.from({length: 100}, (_, i) => <Books />).map(e => e)}
            </BookShelf>
        </StyledShelf>
    )
}

export default Shelves;

const StyledShelf = styled.div`
    margin: 75px auto;
    widows: 90vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`;

const ShelvesButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 25vw;
        height: 40px;
        border: 2px solid black;
        background: #C4C4C4;
        font-weight: bolder; 
    }

    #rbutton {
        margin-left: 1px;
        margin-right: 1px;
    }
`;

const BookShelf = styled.div`
    margin: 25px;
    padding: 0 0 10px;
    width: calc(75vw + 2px);
    height: auto;
    background: whitesmoke;
    align-self: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
`;

const Books = styled.div`
    width: 15%;
    height: 150px;
    margin: 10px 5px 0;
    background-color: darkred;
`;