import React, { useState } from "react";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./WeatherMaster.css";
import Cloudy from "./images/03d.png";

export default function WeatherMaster(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000)
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }


  function search() {
    const apiKey = "f3691b18a7a9f34109b9d2f634be83aa";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if(weatherData.ready) {
  return (
    <div className="WeatherMaster">
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
            <button type="button" className="form-control col-1 location-btn">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </form>
      </div>
    <WeatherInfo data={weatherData} />
      <hr className="hr-1" />
      <Forecast
        day="Mon"
        imgSrc={Cloudy}
        imgAlt="Cloudy"
        minTemp={10}
        maxTemp={13}
      />
      <Forecast
        day="Tue"
        imgSrc={Cloudy}
        imgAlt="Cloudy"
        minTemp={10}
        maxTemp={13}
      />
      <Forecast
        day="Wed"
        imgSrc={Cloudy}
        imgAlt="Cloudy"
        minTemp={10}
        maxTemp={13}
      />
      <Forecast
        day="Thu"
        imgSrc={Cloudy}
        imgAlt="Cloudy"
        minTemp={10}
        maxTemp={13}
      />
      <Forecast
        day="Fri"
        imgSrc={Cloudy}
        imgAlt="Cloudy"
        minTemp={10}
        maxTemp={13}
      />
      <Forecast
        day="Sat"
        imgSrc={Cloudy}
        imgAlt="Cloudy"
        minTemp={10}
        maxTemp={13}
      />
    </div>
  );
  } else {
    search();
    return "Loading...";
  }
}
