import React from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  function time() {
    let hours = new Date(props.data.dt * 1000).getHours();

    if (hours <= 9) {
      return `0${hours}:00`;
    } else {
      return `${hours}:00`;
    }
  }

  function fahrenheit() {
    let minTemp = Math.round((props.data.main.temp_min * 9) / 5 + 32);
    let maxTemp = Math.round((props.data.main.temp_max * 9) / 5 + 32);

    return (
      <h3>
          <span className="min-temp">{minTemp}</span>° |
          <strong>
            <span className="max-temp"> {maxTemp}</span>°
          </strong>
        </h3>
    );
  }

  function celsius() {
    let minTemp = Math.round(props.data.main.temp_min);
    let maxTemp = Math.round(props.data.main.temp_max);

    return (
      <h3>
          <span className="min-temp">{minTemp}</span>° |
          <strong>
            <span className="max-temp"> {maxTemp}</span>°
          </strong>
        </h3>
    );
  }

  if (props.units === "metric") {
    return (
    <div className="ForecastPreview row">
      <div className="col-4 week-day">
        <h3 id="day-1">{time()}</h3>
      </div>
      <div className="col-3 week-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="col-5 week-temp">
        {celsius()}
      </div>
    </div>
    );
  } else {
    return (
    <div className="ForecastPreview row">
      <div className="col-4 week-day">
        <h3 id="day-1">{time()}</h3>
      </div>
      <div className="col-3 week-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="col-5 week-temp">
        {fahrenheit()}
      </div>
    </div>
    );
  }
}