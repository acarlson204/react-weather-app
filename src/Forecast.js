import React from "react";

import "./Forecast.css";
import "./App.css";
import axios from "axios";
export default function Forecast(props) {
    let weatherData = {
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        imgAlt: "sun"
    };

    function handleAPIResponse(response) {
        console.log(response.data)

        let latitude = props.coordinates.lon;
        let longitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=03ea91762285df0d5fb999b760075dea&units=metric`
        axios.get(apiUrl).then(handleAPIResponse);
    }

    return (
        <div className="container">
            <hr />
            <div className="forecast">
                <div className="row">

                    <div className="col weekday">
                        Thursday
                        <div className="upcoming-icon">
                            <img src={weatherData.imgUrl} alt={weatherData.imgAlt} />
                        </div>
                        12°/0°
                        <br />
                        💧5%
                    </div>

                </div>
            </div>
        </div>
    );
}
