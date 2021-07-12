import React, { useState } from "react";
import "./Unit.css";

export default function Unit(props) {
    const [units, setUnits] = useState("celcius")
    const fahrenheit = (props.temperature * 9) / 5 + 32;
    const celcius = props.temperature

    function showFahrenheit(event) {
        event.preventDefault();
        setUnits("fahrenheit")
    }
    function showCelcius(event) {
        event.preventDefault();
        setUnits("celcius")
    }

    if (units === "celcius") {
        return (
            <span className="units">
                <span className="celsius-link active">{Math.round(celcius)}</span>
                <span className="fahrenheit-link"><button onClick={showFahrenheit} class="unit">℉</button></span>
            </span>
        );
    } else {
        return (
            <span className="units">
                <span className="celsius-link">{Math.round(fahrenheit)}<button onClick={showCelcius} class="unit">℃</button></span>
                <span className=" fahrenheit-link active"></span>
            </span>
        );
    }
}