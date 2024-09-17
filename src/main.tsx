import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

//https://desishub-docs.vercel.app/programming-tutorials/nextjs/redux#introduction
//https://www.youtube.com/watch?v=G6YoUlYrr9M
