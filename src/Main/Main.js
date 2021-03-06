import React, { useState } from "react";
import Forecast from "../Forecast/Forecast";
import CurrentWeatherInfo from "../CurrentWeatherInfo/CurrentWeatherInfo";
import axios from "axios";
import Loader from 'react-loader-spinner';
import "./Main.css";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [units, setUnits] = useState("metric");
  const apiKey = "f3691b18a7a9f34109b9d2f634be83aa";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function handleFormSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  function getGeolocation() {
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  if(weatherData.ready) {
  return (
    <div className="Main">
      <div className="Form">
        <form className="city-search-form" onSubmit={handleFormSubmit}>
          <div className="row form-row">
            <input
              type="text"
              className="form-control col-9"
              placeholder="Search city..."
              autoFocus="on"
              autoComplete="off"
              onChange={handleCityInput}
            />
            <button type="submit" className="form-control col-1 search-btn">
              <i className="fas fa-search"></i>
            </button>
            <button type="button" onClick={getGeolocation} className="form-control col-1 location-btn">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </form>
      </div>
    <CurrentWeatherInfo data={weatherData} units={units} setUnits={setUnits} />
      <hr className="hr-1" />
      <Forecast
        city = {weatherData.city}
        units = {units}
      />
    </div>
  );
  } else {
    search();
    return (
    <div className="WeatherMain">
    <Loader type="ThreeDots" color="#BABABA" height={80} width={80} className="loader" />
    </div>
    );
  }
}
