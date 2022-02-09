import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    temperature: {
      min: 12,
      max: 22
    },
    wind: {
      speed: 10,
      direction: "s"
    },
    humidity: 30
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastDetails instances", () => {
    const { getAllByTestId } = render(
      <ForecastDetails forecast={validProps} />
    );

    expect(getAllByTestId("forecast-details")).toHaveLength(1);
  });
});
