import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function ForecastDetails(props) {
  const { forecast } = props;
  const { temperature, wind, humidity, date } = forecast;

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__temperature">
        {temperature.max}
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details_wind">
        {wind.speed}
        {wind.direction}
      </div>
      <div className="forecast-details_humidity">{humidity}</div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};
