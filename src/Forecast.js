import React from "react";
import "./App.css";
export default function Forecast() {
    let weatherData = {
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        imgAlt: "sun"
    };
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
