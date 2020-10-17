import React from "react";
import "./WeatherIcon.css";
import ClearDay from "./images/01d.png";
import ClearNight from "./images/01n.png";
import PartlyCloudyDay from "./images/02d.png";
import PartlyCloudyNight from "./images/02n.png";
import CloudyDay from "./images/03d.png";
import CloudyNight from "./images/03n.png";
import ShowerRain from "./images/09d.png";
import RainDay from "./images/10d.png";
import RainNight from "./images/10n.png";
import Thunderstorm from "./images/11d.png";
import Snow from "./images/13d.png";
import Mist from "./images/50d.png";

export default function WeatherIcon(props) {
    console.log(props.code);
    const codeMapping = {
        "01d": ClearDay,
        "01n": ClearNight,
        "02d": PartlyCloudyDay,
        "02n": PartlyCloudyNight,
        "03d": CloudyDay,
        "03n": CloudyNight,
        "04d": CloudyDay,
        "04n": CloudyNight,
        "09d": ShowerRain,
        "09n": ShowerRain,
        "10d": RainDay,
        "10n": RainNight,
        "11d": Thunderstorm,
        "13d": Snow,
        "50d": Mist
    }

    return (
    <div className="WeatherIcon">
        <img src={codeMapping[props.code]} alt={props.alt} />
    </div>
    );
}