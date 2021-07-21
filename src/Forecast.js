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

                <div className="forecast">
                    <div className="row">
                        <div className="col">
                            <ForecastDay data={forecastData[1]} />
                        </div>
                        <div className="col">
                            <ForecastDay data={forecastData[2]} />
                        </div>
                        <div className="col">
                            <ForecastDay data={forecastData[3]} />
                        </div>

                        <hr />
                        <div className="col">
                            <ForecastDay data={forecastData[4]} />
                        </div>
                        <div className="col">
                            <ForecastDay data={forecastData[5]} />
                        </div>
                        <div className="col">
                            <ForecastDay data={forecastData[6]} />
                        </div>
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