import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
// import Fb from "./App.test";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <AuthContextProvider>

        <App />
    </AuthContextProvider>

    , document.getElementById("root"));
