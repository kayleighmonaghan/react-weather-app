import React from "react";
import WeatherIcon from "./WeatherIcon";
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

    return (
    <div className="ForecastPreview row">
      <div className="col-4 week-day">
        <h3 id="day-1">{time()}</h3>
      </div>
      <div className="col-3 week-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="col-5 week-temp">
        <h3>
          <span className="min-temp">{Math.round(props.data.main.temp_min)}</span>° |
          <strong>
            <span className="max-temp"> {Math.round(props.data.main.temp_max)}</span>°
          </strong>
        </h3>
      </div>
    </div>
    );
}