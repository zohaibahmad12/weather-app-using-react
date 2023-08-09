import React, { useEffect } from "react";
import { useWeatherContext } from "../context/WeatherContext";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api/getWeatherData";


const Input = () => {

    const weather = useWeatherContext();



    const fetchCurrentLocationWeather = async (position) => {

        navigator.geolocation.getCurrentPosition(async (position) => {

            const weatherData = await getWeatherDataForLocation(position);
            weather.setWeatherData(weatherData);
        })

    }

    useEffect(() => {

        fetchCurrentLocationWeather();


    }, []);



    const handleInputChange = (event) => {

        weather.setUserInput(event.target.value);
    }



    const fetchWeatherData = async () => {

        if (weather.userInput) {
            weather.setWeatherData(null);
            weather.setIsLoading(true);
            const weatherData = await getWeatherDataForCity(weather.userInput);

            weather.setWeatherData(weatherData);
            weather.isLoading = false;
        }
        else {
            alert("Please Enter a City Name...");
            fetchCurrentLocationWeather();
        }


    }


    return (
        <div className="input-container">
            <input value={weather.userInput} onChange={handleInputChange} placeholder="Enter a City Name" className="user-input" type="text" />
            <button className="search-button" onClick={fetchWeatherData} >Search</button>
        </div>
    )
}


export default Input;