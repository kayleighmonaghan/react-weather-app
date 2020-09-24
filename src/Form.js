import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form className="city-search-form">
        <div className="row form-row">
          <input
            type="text"
            className="form-control col-9"
            placeholder="Search city..."
            autoFocus="on"
            autoComplete="off"
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
  );
}
