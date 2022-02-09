import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }
  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
      setErrorMessage("");
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town or city, try again!");
        // eslint-disable-next-line no-console
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops, server error, try again later.");
        // eslint-disable-next-line no-console
        console.error("Server error", error);
      }
    });
};

export default getForecast;
