import React from "react";

export default function Footer() {

    return (

        <div className="sub-footer">
            <hr />
            <div className="row text-center ">

                <h3>Let's work together
                </h3>


                <a href="mailto:ABBYCARLSON204@GMAIL.COM">ABBYCARLSON204@GMAIL.COM</a>
                <br />

                <a href="https://www.linkedin.com/in/acarlson204" target="_blank" rel="noreferrer">ON
                    LINKED IN  </a>

                <a href=" https://github.com/acarlson204" target="_blank" rel="noreferrer">ON GITHUB</a>


                <div className="row">
                    <div className="col">
                        <button className="mt-3 mb-3" href="contactme.html">Get in touch</button>
                    </div><div className="col-6">
                        <button className="mt-3 mb-3" href="contactme.html">My Portfolio</button>
                    </div>
                </div>


                <hr />
            </div>
            <footer>
                <div className="text-center mt-3 mb-4">
                    2021 Abby Carlson. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
