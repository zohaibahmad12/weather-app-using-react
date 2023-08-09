import React from "react";
import { useWeatherContext } from "../context/WeatherContext";

const Weather = () => {

    const weather = useWeatherContext();

    
    if (weather.weatherData) {

        if(weather.weatherData.error){

        }
        else{
            return (

                <div className="weather-details">

                    <div className="icon-container">
                        <img className="weather-icon" src={weather.weatherData.current.condition.icon} alt="" />
                    </div>

                    <h1 className="temperature">{weather.weatherData.current.temp_c}&deg;C</h1>
                    <h1 className="condition">{weather.weatherData.current.condition.text}</h1>
                    <h3 className="location"> <i className="fas fa-map-marker-alt"></i> {weather.weatherData.location.name}</h3>

                </div>
            )
        }
            
        }

   
}

export default Weather;