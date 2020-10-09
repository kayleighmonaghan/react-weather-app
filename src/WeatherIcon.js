import React from "react";
import "01d" from "./images/01d.png";
import "01n" from "./images/01n.png";
import "02d" from "./images/02d.png";
import "02n" from "./images/02n.png";
import "03d" from "./images/03d.png";
import "03n" from "./images/03n.png";
import "09d" from "./images/09d.png";
import "10d" from "./images/10d.png";
import "10n" from "./images/10n.png";
import "11d" from "./images/11d.png";
import "13d" from "./images/13d.png";
import "50d" from "./images/50d.png";

export default function WeatherIcon(props) {
    let imgUrl = `./images/${props.icon}` 

    return <img src={imgUrl} alt={props.alt} />
}