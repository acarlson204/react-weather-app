import React from "react";

export default function ForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000)
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day];
    }

    return (
        <div className="col weekday">{day()}
            <div className="upcoming-icon"></div>
            <div className="temp-max-min">
                {Math.round(maxTemperature())}° / {Math.round(minTemperature())}°</div>

        </div>

    )
}