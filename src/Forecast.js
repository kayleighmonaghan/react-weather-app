import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import Loader from 'react-loader-spinner';
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  
  
  if (loaded && props.city === forecast.city.name) {
    return (   
      <div className="Forecast"> 
        <ForecastPreview data={forecast.list[0]} />
        <ForecastPreview data={forecast.list[1]} />
        <ForecastPreview data={forecast.list[2]} />
        <ForecastPreview data={forecast.list[3]} />
        <ForecastPreview data={forecast.list[4]} />
        <ForecastPreview data={forecast.list[5]} />
      </div>
    );
  } else {
    const apiKey = "4a0932e6a87951bced5617f7239c5fdc";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleForecastResponse);

    return (
      <div className="Forecast">
      <Loader type="ThreeDots" color="#BABABA" height={80} width={80} className="loader" />
      </div>
    );
  }
}
