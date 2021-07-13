import React from "react";

export default function ForecastDay(props) {
    <div className="col weekday">{props.data.dt}
        <div className="upcoming-icon"></div>
        <div className="temp-max-min">
            {Math.round(props.data.temp.max)}/{Math.round(props.data.temp.min)}</div>
        <br />
        {props.data.rain}%💧
    </div>
}