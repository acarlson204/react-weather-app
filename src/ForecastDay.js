import React from "react";
import "./App.css";
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
        <div className="col weekday"><strong>{day()}</strong>
            <div className="img">
                <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt={""} />
            </div>
            <div className="temp-max-min">
                {Math.round(maxTemperature())}/{Math.round(minTemperature())}°</div>
            <br />
        </div>

    )
}