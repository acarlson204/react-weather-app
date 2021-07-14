import React, { useState } from "react";
import "./App";
import "./Banner.css";
import Forecast from "./Forecast";
import axios from "axios";
import Units from "./Units";
import WeatherIcon from "./WeatherIcon";

export default function Banner(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
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
                <form onSubmit={handleSubmit} >
                    <div className="input-group">
                        <input type="text" onChange={handleCityChange} className="form-control search-input" placeholder="Search" autoFocus="on" aria-label="Search" />
                        <button type="submit" value="submit">Search</button>
                    </div>
                </form>
                <div className="Banner">
                    <div className="row">
                        <div className="col-3">
                            <WeatherIcon code={props.icon} />
                        </div>
                        <span className="col-6">
                            <h1 className="city">{city}</h1> </span>
                    </div>
                    <div className="banner-main">
                        <div className="row">
                            <div className="col-6 left-col">
                                <div className="temperature">
                                    <Units celcius={weatherData.temperature} /></div>
                                <div className="description">{weatherData.description}</div>
                            </div>
                            <div className="col-6 right-col">
                                <br />
                                <div className="weather-conditions">
                                    HUMIDITY:
                                    <span className="humidity">{weatherData.humidity}</span>%
                                    <br />
                                    WIND:
                                    <span className="wind">{weatherData.wind}</span>km/h
                                    <br />
                                    RAIN:
                                    <span className="rain">{weatherData.rain}</span>%
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