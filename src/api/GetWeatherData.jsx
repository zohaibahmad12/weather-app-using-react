

const GetWeatherData = async (city) => {

    if(city){
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5f38c9806d9e4d58b44164121230808&q=${city}&aqi=no`);
            const data = await response.json();
            return data;
    
        } catch (error) {
           
        }
       
    }
    else{
        alert("Please Enter a City Name .....")
    }
  

}

export default GetWeatherData;

