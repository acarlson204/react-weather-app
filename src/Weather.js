import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Forecast from "./Forecast";
import Form from "./Form";
import LastUpdated from "./LastUpdated";

export default function Weather() {
    return (

        <div className="container">
            <div className="weather">
                <Form />
                <hr />
                <Banner />
                <Forecast />
                <hr />
                <LastUpdated />
            </div>
            <Footer />
        </div>

    );
}
