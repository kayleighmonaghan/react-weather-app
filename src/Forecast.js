import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  
  function time() {
    let hours = new Date(forecast.list[props.hour].dt * 1000).getHours();

    if (hours <= 9) {
      return `0${hours}:00`;
    } else {
      return `${hours}:00`;
    }
  }

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  
  
  if (loaded) {
    return (    
    <div className="Forecast row">
      <div className="col-4 week-day">
    <h3 id="day-1">{time()}</h3>
      </div>
      <div className="col-3 week-icon">
        <WeatherIcon code={forecast.list[props.hour].weather[0].icon} />
      </div>
      <div className="col-5 week-temp">
        <h3>
          <span className="min-temp">{Math.round(forecast.list[props.hour].main.temp_min)}</span>° |
          <strong>
            <span className="max-temp"> {Math.round(forecast.list[props.hour].main.temp_max)}</span>°
          </strong>
        </h3>
      </div>
    </div>
    );
  } else {
    const apiKey = "f3691b18a7a9f34109b9d2f634be83aa";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
