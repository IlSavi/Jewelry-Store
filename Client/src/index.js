import React, { createContext } from "react";
import { createRoot } from "react-dom/client";  // Import createRoot from "react-dom/client"
import App from "./App";
import UserStore from "./store/UserStore";
import JewelryStore from "./store/JewelryStore";

export const Context = createContext(null);

const root = createRoot(document.getElementById("root"));

root.render(
  <Context.Provider value={{ user: new UserStore(), jewelry: new JewelryStore() }}>
    <App />
  </Context.Provider>
);



/*
import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from './App';
import UserStore from "./store/UserStore";
import JewelryStore from "./store/JewelryStore";

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value = {{
    user: new UserStore(),
    jewelry: new JewelryStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
*/
/*
import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from './App';
import UserStore from "./store/UserStore";
import JewelryStore from "./store/JewelryStore";

export const Context = createContext(null)

const root = document.getElementById('root');

const initializeApp = () => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Context.Provider value={{ user: new UserStore() }}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  );
};

initializeApp();
*/





















/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
