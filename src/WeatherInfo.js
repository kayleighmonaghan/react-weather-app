import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
        return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-5 today">
            <h2>Today</h2>
          </div>
          <div className="col-7 location">
            <h2 className="city">{props.data.city}</h2>
          </div>
        </div>
        <div className="row date-country-row">
          <div className="col-6 date">
            <ul>
              <li>
                Last updated: <FormatDate date={props.data.date} />
              </li>
              <li className="weather-description">{props.data.description}</li>
            </ul>
          </div>
          <div className="col-6 location">
            <ul>
              <li className="country">{props.data.country}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-5 today-temp-div">
            <h1>
              <span>{props.data.temperature}</span>
              <span className="units">
                <button className="change-temp-btn active">°C</button>|
                <button className="change-temp-btn">°F</button>
              </span>
            </h1>
          </div>
          <div className="col-2 today-img-div">
              <WeatherIcon code={props.data.icon} alt={props.data.description} className="today-img" />
          </div>
          <div className="col-5">
            <ul className="weather-stats">
              <li>
                Humidity <strong>{props.data.humidity}%</strong>
              </li>
              <li>
                Wind <strong>{props.data.wind}mph</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}