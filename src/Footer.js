import React from "react";
import "./Footer.css";
export default function Footer() {

    return (
        <div>
            <div className="sub-footer">
                <hr />
                <div className="row text-center ">
                    <h3>
                        <span className="together"><a href="mailto:ABBYCARLSON204@GMAIL.COM">Let's work together</a></span>
                    </h3>
                </div>
            </div>
            <hr />
            <footer>
                <div className="text-center mt-3 mb-4">
                    This project is made with <a href="https://openweathermap.org/">OpenWeatherAPI</a> , hosted with <a href="https://app.netlify.com/teams/acarlson204/overview">Netlify</a> and open sourced on <a href="https://github.com/acarlson204">Github</a>
                    <br />
                    2021 Abby Carlson. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
