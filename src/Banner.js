import React, { useState } from "react";
import "./App";
import axios from "axios";

export default function Banner(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity)
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            feelslike: Math.round(response.data.main.feels_like),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            icon: response.data.weather[0].icon,
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }
    function search() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03ea91762285df0d5fb999b760075dea&units=metric`;
        axios.get(url).then(handleResponse);
    }


    if (weatherData.ready) {
        return (
            <div className="container">

                <form onSubmit={handleSubmit}>
                    <div class="input-group">
                        <input type="text" onChange={handleCityChange} className="form-control search-input" placeholder="Search" autoFocus="on" aria-label="Search" />
                        <button type="submit" value="submit">Search</button>
                    </div>
                </form>
                <div className="Banner">
                    <div className="row">
                        <h1 className="city">{city}</h1>
                        <img className="icon" src={weatherData.icon} alt="" />
                    </div>

                    <div className="row">
                        <div className="col-6 left-col">
                            <span className="temperature">{weatherData.temperature}</span>
                            <span className="units">
                                <span className="celsius-link active">℃</span>| ℉
                            </span>

                            <div className="description">{weatherData.description}</div>
                        </div>

                        <div className="col-6 right-col">

                            <br />FEELS LIKE:
                            <span className="feelslike">{weatherData.feelslike}</span>℃
                            <div className="weather-conditions">
                                HUMIDITY:
                                <span className="humidity">{weatherData.humidity}</span>% <br />
                                WIND:
                                <span className="wind">{weatherData.wind}</span>km/h
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    } else {
        search();
        return (<p>Loading</p>)
    }
}