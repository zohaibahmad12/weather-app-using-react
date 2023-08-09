import React, { createContext, useContext,useState } from "react";

const WeatherContext = createContext(null);

export const useWeatherContext = () => {
    return useContext(WeatherContext);
}

export const WeatherContextProvider = (props) => {

    const [weatherData,setWeatherData]=useState(null);
    const [userInput,setUserInput]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    return (
        <WeatherContext.Provider value={{weatherData,setWeatherData,userInput,setUserInput,isLoading,setIsLoading}}>
            {props.children}
        </WeatherContext.Provider>
    )
}

