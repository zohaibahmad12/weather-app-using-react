

export const getWeatherDataForCity = async (city) => {
 
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5f38c9806d9e4d58b44164121230808&q=${city}&aqi=no`);
            const data = await response.json();
            return data;
    
        } catch (error) {
           
        }

}

export const getWeatherDataForLocation = async (position) => {
 
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5f38c9806d9e4d58b44164121230808&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`);
        const data = await response.json();
        return data;

    } catch (error) {
       
    }

}



