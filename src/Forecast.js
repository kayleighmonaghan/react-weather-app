import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import Loader from 'react-loader-spinner';
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [units, setUnits] = useState("metric");
  
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  
  
  if (loaded && props.city === forecast.city.name) {
    return (   
      <div className="Forecast"> 
        <ForecastPreview data={forecast.list[0]} units={props.units} />
        <ForecastPreview data={forecast.list[1]} units={props.units} />
        <ForecastPreview data={forecast.list[2]} units={props.units} />
        <ForecastPreview data={forecast.list[3]} units={props.units} />
        <ForecastPreview data={forecast.list[4]} units={props.units} />
        <ForecastPreview data={forecast.list[5]} units={props.units} />
      </div>
    );
  } else {
    const apiKey = "f3691b18a7a9f34109b9d2f634be83aa";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleForecastResponse);

    return (
      <div className="Forecast">
      <Loader type="ThreeDots" color="#BABABA" height={80} width={80} className="loader" />
      </div>
    );
  }
}
