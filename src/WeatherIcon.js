import React from "react";

export default function WeatherIcon(props) {
    let imgUrl = `./images/${props.icon}` 

    return <img src={imgUrl} alt={props.alt} />
}