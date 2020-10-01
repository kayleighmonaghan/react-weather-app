import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather({ city }) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      city: "Glasgow",
      country: "GB",
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-5 today">
            <h2>Today</h2>
          </div>
          <div className="col-7 location">
            <h2 className="city">{weatherData.city}</h2>
          </div>
        </div>
        <div className="row date-country-row">
          <div className="col-6 date">
            <ul>
              <li>Last updated: ,</li>
              <li className="weather-description">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-6 location">
            <ul>
              <li className="country"></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-5 today-temp-div">
              <h1>
                <span>{weatherData.temperature}</span>
                <span className="units">
                  <button className="change-temp-btn active">°C</button>|
                  <button className="change-temp-btn">°F</button>
                </span>
              </h1>
            </div>
            <div className="col-2 today-img-div">
              <img
                src="images/01d.png"
                alt={weatherData.description}
                className="today-img"
              />
            </div>
            <div className="col-5">
              <ul className="weather-stats">
                <li>
                  Humidity
                  <strong>{weatherData.humidity}%</strong>
                </li>
                <li>
                  Wind
                  <strong>{weatherData.wind}mph</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f3691b18a7a9f34109b9d2f634be83aa";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleSubmit);
    return "Loading...";
  }
}
