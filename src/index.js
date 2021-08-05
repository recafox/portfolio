import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App.jsx";
import { UserDataProvider } from "./Contexts/UserContext";

ReactDOM.render(
  <UserDataProvider>
    <App></App>
  </UserDataProvider>,
  document.getElementById("root")
);
