import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo"

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function search() {
    const apiKey = "f3691b18a7a9f34109b9d2f634be83aa";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleSubmit);
  }

  function handleSubmit(response) {
    setWeatherData({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      country: "GB",
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <WeatherInfo data={weatherData} />
    );
  } else {
    search();
    return "Loading...";
  }
}
