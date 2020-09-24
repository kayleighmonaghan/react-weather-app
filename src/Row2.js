import React from "react";
import "./Row2.css";

export default function Row2({ date, time, description, country }) {
  return (
    <div className="Row2">
      <div className="row date-country-row">
        <div className="col-6 date">
          <ul>
            <li>
              Last updated: {date}, {time}
            </li>
            <li className="weather-description">{description}</li>
          </ul>
        </div>
        <div className="col-6 location">
          <ul>
            <li className="country">{country}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
