import React from "react";

export default function Banner() {
    let weatherData = {
        city: "New York",
        temperature: "11",
        description: "Cloudy",
        humidity: "99",
        wind: "25",
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        imgAlt: "sun"
    };
    return (
        <div className="Banner">
            <div className="container">
                <div className="row">
                    <div className="col-7 left-col">
                        <h1 className="city">{weatherData.city}</h1>
                        <span className="description">{weatherData.description}</span>
                        <div className="weather-conditions">
                            <strong>HUMIDITY: </strong>
                            <span className="humidity">{weatherData.humidity}</span> % |
                            <strong>WIND: </strong>
                            <span className="wind">{weatherData.wind}</span> km/h
                        </div>
                    </div>
                    <div className="col right-col current-weather-background">
                        <img src={weatherData.imgUrl} alt={weatherData.imgAlt} />
                        <span className="temperature">{weatherData.temperature}</span>
                        <span className="units">
                            <span className="celsius-link active">℃</span>| ℉
                        </span>

                        <div className="current-temp-max-min-wrapper">
                            <span className="temp-max">00</span>℃ /
                            <span className="temp-min">00</span>℃
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
