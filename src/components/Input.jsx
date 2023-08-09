import React from "react";
import { useWeatherContext } from "../context/Weather";
import GetWeatherData from "../api/GetWeatherData"


const Input = () => {

    const weather = useWeatherContext();

    const handleInputChange=(event)=>{

        weather.setUserInput(event.target.value);
    }

    const fetchWeatherData=async()=>{

        weather.setWeatherData(null);
        weather.setIsLoading(true);
        const weatherData=await GetWeatherData(weather.userInput);
        weather.setWeatherData(weatherData);
        weather.isLoading=false;
    }

   
    return (
        <div className="input-container">
            <input value={weather.userInput} onChange={handleInputChange} placeholder="Enter a City Name" className="user-input" type="text" />
            <button className="search-button" onClick={fetchWeatherData} >Search</button>
        </div>
    )
}


export default Input;