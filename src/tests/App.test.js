import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forecast.json";

xtest("renders Weather App", () => {
  render(<App location={forecast.location} />);
  const linkElement = screen.getByText("Manchester, UK");
  expect(linkElement).toBeInTheDocument();
});
