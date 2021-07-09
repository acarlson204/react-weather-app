import React from "react";

export default function Footer() {
    let img = {
        imgNetlify: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        imgGithub: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
    };
    return (

        <div className="sub-footer">
            <hr />
            <div class="row text-center ">
                <div class="col-sm-6">
                    <h3>Let's work together
                    </h3>

                </div>
                <div class="col-sm-6">
                    <a href="mailto:ABBYCARLSON204@GMAIL.COM">ABBYCARLSON204@GMAIL.COM</a>
                    <br />

                    <a href="https://www.linkedin.com/in/acarlson204" target="_blank">ON
                        LINKED IN  </a>

                    <a href=" https://github.com/acarlson204" target="_blank">ON GITHUB</a>

                </div>

                <div className="row">
                    <div className="col-6">
                        <button class="mt-3 mb-3" href="contactme.html">Get in touch</button>
                    </div><div className="col-6">
                        <button class="mt-3 mb-3" href="contactme.html">My Portfolio</button>
                    </div>
                </div>


                <hr />
            </div>
            <footer>
                <div class="text-center mt-3 mb-4">
                    2021 Abby Carlson. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
