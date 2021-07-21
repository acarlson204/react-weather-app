import React from "react";
import "./App.css";
import "./Footer.css";
export default function Footer() {

    return (
        <div>
            <hr />
            <footer>
                <div className="text-center mt-1 mb-4">
                    <div className="mb">
                        This project is made with <a href="https://openweathermap.org/">OpenWeather</a>, hosted with <a href="https://app.netlify.com/teams/acarlson204/overview">Netlify,</a> and open sourced on <a href="https://github.com/acarlson204">Github.</a>
                    </div>
                    <br />
                    2021 Abby Carlson. All rights reserved.
                </div>
            </footer >
        </div >
    );
}
