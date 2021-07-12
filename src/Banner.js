import React, { useState } from "react";
import "./App";
import "./Banner.css";
import Forecast from "./Forecast";
import axios from "axios";
import Units from "./Units";

export default function Banner(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            feelslike: Math.round(response.data.main.feels_like),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
                        <div className="col-3">
                            <img className="icon" src={weatherData.icon} alt="" />
                        </div>
                        <span className="col-6">
                            <h1 className="city">{city}</h1> </span>
                    </div>
                    <div className="banner-main">
                        <div className="row">
                            <div className="col-6 left-col">
                                <div className="temperature">{weatherData.temperature}</div>
                                <Units celcius={props.temperature} />
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
                    <Forecast coordinates={weatherData.coordinates} />
                </div>
            </div >
        )
    } else {
        search();
        return (<p>Loading</p>)
    }
}