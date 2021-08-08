import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App.jsx";

// context
import { UserDataProvider } from "./Contexts/UserContext";

// styling
import "./Styles/reset.css";
import "./Styles/index.css";

ReactDOM.render(
  <UserDataProvider>
    <App></App>
  </UserDataProvider>,
  document.getElementById("root")
);
