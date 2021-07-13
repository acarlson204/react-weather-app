import React from "react";
import "./Footer.css";
export default function Footer() {

    return (

        <div className="sub-footer">
            <hr />

            <div className="row text-center ">
                <div className="col-6">
                    <h3>Let's work together
                    </h3>
                </div>


                <br />

                <div className="col-6">
                    <a href="https://www.linkedin.com/in/acarlson204" target="_blank" rel="noreferrer">ON LINKED IN</a>
                    <br />
                    <a href=" https://github.com/acarlson204" target="_blank" rel="noreferrer">ON GITHUB</a>
                </div>
                <div className="row justify-content-center">
                    <a href="mailto:ABBYCARLSON204@GMAIL.COM" className="mt-3 email text-center">ABBYCARLSON204@GMAIL.COM</a>
                </div>
            </div>
            <div className="text-center">
                <a href="mailto:ABBYCARLSON204@GMAIL.COM">
                    <button className="m-2">Get in touch</button>
                </a>
                <a href="https://adoring-sinoussi-be89f4.netlify.app/index.html">
                    <button className="m-2">My Portfolio</button>
                </a>
            </div >
            <hr />
            <footer>
                <div className="text-center mt-3 mb-4">
                    2021 Abby Carlson. All rights reserved.
                </div>
            </footer>
        </div >
    );
}
