import React from "react";
import "./WeatherIcon.css";
import ClearDay from "../images/01d.png";
import ClearNight from "../images/01n.png";
import PartlyCloudyDay from "../images/02d.png";
import PartlyCloudyNight from "../images/02n.png";
import CloudyDay from "../images/03d.png";
import CloudyNight from "../images/03n.png";
import ShowerRainDay from "../images/09d.png";
import ShowerRainNight from "../images/09n.png";
import RainDay from "../images/10d.png";
import RainNight from "../images/10n.png";
import ThunderstormDay from "../images/11d.png";
import ThunderstormNight from "../images/11n.png";
import SnowDay from "../images/13d.png";
import SnowNight from "../images/13n.png";
import MistDay from "../images/50d.png";
import MistNight from "../images/50n.png";

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
        "09d": ShowerRainDay,
        "09n": ShowerRainNight,
        "10d": RainDay,
        "10n": RainNight,
        "11d": ThunderstormDay,
        "11n": ThunderstormNight,
        "13d": SnowDay,
        "13n": SnowNight,
        "50d": MistDay,
        "50n": MistNight
    }

    return (
    <div className="WeatherIcon">
        <img src={codeMapping[props.code]} alt={props.alt} />
    </div>
    );
}