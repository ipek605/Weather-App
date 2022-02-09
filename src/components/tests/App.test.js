import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("it renders correctly", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
