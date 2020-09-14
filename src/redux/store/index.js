import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

// import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
// import reducers from '../reducers';

// const store = createStore(reducers, applyMiddleware(thunk));
// export default store;
