import React from "react";
import "./App.css";
export default function Forecast() {
    let weatherData = {
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        imgAlt: "sun"
    };
    return (
        <div className="Container">
            <hr />
            <div className="Forecast">
                <div className="row">
                    <div className="col weekdays">
                        Thursday
                        <div className="upcoming-icon">
                            <img src={weatherData.imgUrl} alt={weatherData.imgAlt} />
                        </div>
                        12°/0°
                        <br />
                        💧5%
                    </div>
                    <div className="col weekdays">
                        Friday
                        <div className="upcoming-icon">
                            <img src={weatherData.imgUrl} alt={weatherData.imgAlt} />
                        </div>
                        12°/0°
                        <br />
                        💧8%
                    </div>
                    <div className="col weekdays">
                        Saturday
                        <div className="upcoming-icon">
                            <img src={weatherData.imgUrl} alt={weatherData.imgAlt} />
                        </div>
                        11°/0°
                        <br />
                        💧7%
                    </div>
                    <div className="col weekdays">
                        Sunday
                        <div className="upcoming-icon">
                            <img src={weatherData.imgUrl} alt={weatherData.imgAlt} />
                        </div>
                        12°/1°
                        <br />
                        💧5%
                    </div>
                    <div className="col weekdays">
                        Monday
                        <div className="upcoming-icon">
                            <img src={weatherData.imgUrl} alt={weatherData.imgAlt} />
                        </div>
                        16°/4°
                        <br />
                        💧5%
                    </div>
                </div>
            </div>
        </div>
    );
}
