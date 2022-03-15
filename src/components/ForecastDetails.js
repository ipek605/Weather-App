import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import "../styles/forecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity, icon, description } = forecast;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__body">
        <div className="forecast-details__icon">
          <WeatherIcon name="owm" iconId={icon} />
        </div>
        <div className="forecast-details__body__text">
          <div className="forecast-details__description" id="description">
            {description}
          </div>
          <div className="forecast-details__min-temperature">
            Min temp:
            {` ${temperature.min}`}
            &deg;C
          </div>
          <div className="forecast-details__max-temperature">
            Max temp:
            {` ${temperature.max}`}
            &deg;C
          </div>
          <div className="forecast-details__humidity">
            Humidity:
            {` ${humidity}`}
            &#37;
          </div>
          <div className="forecast-details__wind-speed">
            Wind speed:
            {` ${wind.speed}`}
            mph
          </div>
          <div className="forecast-details__wind-direction">
            Wind direction:
            {` ${wind.direction.toUpperCase()}`}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    description: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
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
