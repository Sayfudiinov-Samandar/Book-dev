import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import {Provider} from "react-redux"
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
      {/* <ThemeContextProvider> */}
        <Provider store={store}>

        <App />
        </Provider>
      {/* </ThemeContextProvider> */}
    </BrowserRouter>
);
