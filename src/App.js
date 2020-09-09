import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAddToShelf } from "./redux/actions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const a = (id, s) => {
    dispatch(requestAddToShelf(id, s));
  };
  debugger;
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
};

export default App;
