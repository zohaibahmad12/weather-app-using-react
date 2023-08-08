import React from "react";

const Weather = () => {

    return (

        <div className="weather-details">

            <div className="icon-container">
                <img className="weather-icon" src="//cdn.weatherapi.com/weather/64x64/day/296.png" alt="" />
            </div>

            <h1 className="temperature">32&deg;C</h1>
            <h1 className="condition">Broken Clouds</h1>
            <h3 className="location"> <i class="fas fa-map-marker-alt"></i> London,United Kingdom</h3>
          
        </div>
    )
}

export default Weather;