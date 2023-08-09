import React from "react";
import { useWeatherContext } from "../context/Weather";

const Footer = () => {

    const weather = useWeatherContext();


    if (weather.weatherData) {


        if (weather.weatherData.error) {
            return (
                <div className="error-container">
                    <p className="error-message">{weather.weatherData.error.message}</p>
                </div>
            )
        }


        else {
            return (
                <div className="footer-container">
                    <div className="left">
                        <i className="fas fa-tint humidity-icon"></i>
                        <h3>{weather.weatherData.current.humidity}% <br /><span>Humidity</span></h3>
                    </div>
                    <div className="right">
                        <i className="fas fa-wind wind-speed-icon"></i>
                        <h3>{weather.weatherData.current.wind_kph}km/h<br /><span>WindSpeed</span></h3>
                    </div>
                </div>
            )
        }

    }

    else if(weather.isLoading===true){

        return (
            <div className="error-container">
                <p className="error-message">Loading...</p>
            </div>
        )
    }

}


export default Footer;