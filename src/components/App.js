import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import getForecast from "../Requests/GetForecast";
import clear from "../images/sunny.jpg";
import cloudy from "../images/cloudy.jpg";
import hazy from "../images/hazy3.jpg";
import raining from "../images/raining.jpg";
import snowing from "../images/snowing.jpg";
import stormy from "../images/stormy.jpg";
import weather from "../images/weather.jpg";
import weather2 from "../images/weather2.jpg";

import "../styles/App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(0);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  let backgroundImage;

  if (selectedForecast) {
    switch (selectedForecast.description) {
      case "Clouds":
        backgroundImage = cloudy;
        break;
      case "Rain":
        backgroundImage = raining;
        break;
      case "Clear":
        backgroundImage = clear;
        break;
      case "Hazy":
        backgroundImage = hazy;
        break;
      case "Stormy":
        backgroundImage = stormy;
        break;
      case "Snowing":
        backgroundImage = snowing;
        break;
      default:
        backgroundImage = weather;
    }
  } else {
    backgroundImage = weather2;
  }

  const handleCitySearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };

  return (
    <div
      className="weather-app"
      data-testid="weather-app"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <div className="main-forecast" data-testid="main-forecast">
        <LocationDetails city={location.city} errorMessage={errorMessage} />

        {!errorMessage && selectedForecast && (
          <ForecastDetails forecast={selectedForecast} />
        )}
      </div>
      {!errorMessage && (
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
      )}
    </div>
  );
}
export default App;
