import React from "react";

export default function Footer() {
    let img = {
        imgNetlify: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        imgGithub: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
    };
    return (
        <footer>
            <div>
                This project was coded by Abby Carlson. <br />
                It is open sourced on GitHub and hosted on Netlify. <br />
                <a href="https://app.netlify.com/teams/acarlson204/overview">
                    <img src={img.imgGithub} alt="Github" />
                </a>
                <a href="https://github.com/acarlson204/vanilla-weather-app">
                    <img src={img.imgNetlify} alt="Netlify" />
                </a>
            </div>
        </footer>
    );
}
