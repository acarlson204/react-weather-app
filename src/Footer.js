import React from "react";
import "./Footer.css";
export default function Footer() {

    return (
        <div>
            <div className="sub-footer">
                <hr />
                <div className="row text-center ">
                    <h3>
                        <span className="together">Let's work <strong>together</strong></span>
                    </h3>
                </div>
                <div className="row">
                    <a href="mailto:ABBYCARLSON204@GMAIL.COM" className="mt-3 email text-center">ABBYCARLSON204@GMAIL.COM</a>
                </div>
            </div>
            <hr />
            <footer>
                <div className="text-center mt-3 mb-4">
                    2021 Abby Carlson. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
