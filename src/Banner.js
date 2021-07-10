import React, { useState } from "react";
import "./App";
import axios from "axios";
export default function Banner(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [setCity] = useState(props.defaultCity)
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather.description,
            feelslike: Math.round(response.data.main.feels_like),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
            alt: "Weather icon"
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity("event.target.value")
    }
    function search() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=winnipeg&appid=03ea91762285df0d5fb999b760075dea&units=metric`;
        axios.get(url).then(handleResponse);
    }
    if (weatherData.ready) {
        return (
            <div className="container">
                <div className="row">

                    <form onSubmit={handleSubmit}>
                        <div className="col-8">
                            <input
                                type="search"
                                className="col form-control search-input"
                                placeholder="Enter a city..."
                                aria-label=".form-control-sm example"
                                autoFocus="on"
                            />
                        </div>
                        <div className="col-3">
                            <button onChange={handleCityChange} type="submit" value="submit" className="col-3 btn btn-primary">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className="Banner">
                    <div className="row">
                        <h1 className="city">Winnipeg</h1>
                    </div>
                    <div className="row">
                        <div className="col-5 left-col">
                            <img className="icon" src={weatherData.icon} alt="" />
                            <span className="temperature">{weatherData.temperature}</span>
                            <span className="units">
                                <span className="celsius-link active">℃</span>| ℉
                            </span>

                            <div className="current-temp-max-min-wrapper">
                                <span className="temp-max">00</span>℃ /
                                <span className="temp-min">00</span>℃
                            </div>
                        </div>

                        <div className="col-7 right-col">

                            <span className="description">{weatherData.description}</span>
                            <br />FEELS LIKE:
                            <span className="feelslike">{weatherData.feelslike}</span> ℃
                            <div className="weather-conditions">
                                HUMIDITY:
                                <span className="humidity">{weatherData.humidity}</span> % <br />
                                WIND:
                                <span className="wind">{weatherData.wind}</span> km/h
                            </div>
                        </div>


                    </div>
                </div>
            </div >
        )
    } else {
        search();
        return <p className="loading">Loading...</p>
    }
}


