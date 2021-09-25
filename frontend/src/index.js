import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/context";

reactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
