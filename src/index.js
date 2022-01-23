import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import forecast from "./data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App forecasts={forecast.forecasts} location={forecast.location} />
  </React.StrictMode>,
  document.getElementById("root")
);
