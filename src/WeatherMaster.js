import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Cloudy from "./images/03d.png";
import Forecast from "./Forecast";
import "./WeatherMaster.css";

export default function WeatherMaster(props) {
const [city, setCity] = useState(props.defaultCity);

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

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
      <CurrentWeather city={city} />
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
}
