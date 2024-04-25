import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./AppContainer/AppContainer.tsx";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </React.StrictMode>
);
