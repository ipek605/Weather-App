import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
  const { forecast } = props;
  const { temperature, wind, humidity } = forecast;

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__temperature">
        <span className="forecast-details__temperature-max">
          Temperature Max: {temperature.max}
          &deg;C
        </span>
        <span className="forecast-details__temperature-min">
          Temperature Min: {temperature.min}
          &deg;C
        </span>
      </div>
      <div className="forecast-details_wind-speed">
        Wind Speed: {wind.speed}
        <span className="forecast-details_wind-direction">
          Wind Direction: {wind.direction}
        </span>
      </div>
      <div className="forecast-details_humidity">
        Humidity: {humidity}
        {}
      </div>
    </div>
  );
}
export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
