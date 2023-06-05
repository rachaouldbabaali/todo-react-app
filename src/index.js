import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ToDoApp from "./components/ToDoApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <div>
    <Navbar />
    <ToDoApp />
  </div>
  //</React.StrictMode>
);
