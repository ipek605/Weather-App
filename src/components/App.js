import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import "../styles/App.css";

function App({ location, forecasts }) {
  App.propTypes = {
    forecasts: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.number,
        description: PropTypes.string,
        icon: PropTypes.number,
        temperature: PropTypes.shape({
          max: PropTypes.number,
          min: PropTypes.number,
        }),
      })
    ).isRequired,
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }).isRequired,
  };
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />

      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

export default App;
