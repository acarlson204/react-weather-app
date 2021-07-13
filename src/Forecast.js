import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import "./App.css";
import axios from "axios";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    function handleAPIResponse(response) {
        setForecastData(response.data.daily)
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="container">
                <hr />
                <div className="forecast">
                    <div className="row">

                        <ForecastDay data={forecastData} />

                    </div>
                </div>
            </div>
        );
    } else {
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=03ea91762285df0d5fb999b760075dea&units=metric`

        axios.get(apiUrl).then(handleAPIResponse);

        return null;
    }
}