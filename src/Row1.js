import React from "react";
import "./Row1.css";

export default function Row1({ city }) {
  return (
    <div className="Row1">
      <div className="row">
        <div className="col-5 today">
          <h2>Today</h2>
        </div>
        <div className="col-7 location">
          <h2 className="city">{city}</h2>
        </div>
      </div>
    </div>
  );
}
