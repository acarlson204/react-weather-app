import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Forecast from "./Forecast";
import Form from "./Form";

export default function Weather() {
    return (

        <div className="container">
            <div className="weather">
                <Form />
                <hr />
                <Banner defaultCity="Winnipeg" />
                <Forecast />
                <hr />
            </div>
            <Footer />
        </div>

    );
}
