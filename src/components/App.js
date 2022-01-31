/* eslint-disable  no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import "../styles/App.css";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const getForecast = () => {
    const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

    useEffect(() => {
      axios.get(endpoint).then((response) => {
        setSelectedDate(response.data.forecasts[0].date);
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
      });
    }, []);

    const selectedForecast = forecasts.find(
      (forecast) => forecast.date === selectedDate
    );

    const handleForecastSelect = (date) => {
      setSelectedDate(date);
    };

    return (
      <div className="weather-app">
        <LocationDetails city={location.city} country={location.country} />
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </div>
    );
  };
}

export default App;
