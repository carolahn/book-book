import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";

import { addToShelf } from "../../redux/actions/tests";
import Book from "../../components/book";

const Test = (props) => {
  const [input, setInput] = useState("harry+potter");

  const dispatch = useDispatch();
  const testing = useSelector((state) => state.books);

  const makeRequestToGoogle = () => {
    if (!input) return;

    Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${input
        .split(" ")
        .join("+")
        .toLowerCase()}&maxResults=${40}`
    ).then(({ data: { items } }) => {
        console.log(items);
      for (let i in items) {
        dispatch(addToShelf(items[i]));
      }
    });
  };

  //   useEffect(() => {
  //     makeRequestToGoogle();
  //   }, []);

  return (
    <div className="Test">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={makeRequestToGoogle}>Escolher</button>
      {Object.values(testing).map((currBook, key) => (
        <Book key={key} data={currBook} />
      ))}
    </div>
  );
};

export default Test;
