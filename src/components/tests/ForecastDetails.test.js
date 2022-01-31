import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description 1",
      wind: {
        speed: 22,
        direction: "poyraz",
      },
      temperature: {
        max: 22,
        min: 12,
      },
      humidity: 50,
    },
  ];

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
