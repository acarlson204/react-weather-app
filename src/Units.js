import React, { useState } from "react";

export default function Unit(props) {
    const [units, setUnits] = useState("celcius")
    function showFahrenheit(event) {
        event.preventDefault();
        setUnits("fahrenheit")
    }
    function showCelcius(event) {
        event.preventDefault();
        setUnits("celcius")
    }
    function fahrenheit() {
        return (props.celcius * 9) / 5 + 32;
    }
    if (units === "celcius") {
        return (
            <span className="units">
                <span className="celsius-link active">{Math.round(props.celcius)}℃</span>|
                <span className=" fahrenheit-link"><a href="#" onClick={showFahrenheit}>℉</a></span>
            </span>
        );
    } else {
        return (
            <span className="units">
                <span className="celsius-link">{Math.round(fahrenheit)}<a href="#" onClick={showCelcius}>℃</a></span>|
                <span className=" fahrenheit-link active">℉</span>
            </span>
        );
    }
}