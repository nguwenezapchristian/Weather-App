const city = "kigali";
const api_key = "d1613c04ca574939968172503232208";

getWeatherData(city);

async function getWeatherData(location) {
    try {
        let link = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`;
        const reponse = await fetch(link);
        const weatherData = await reponse.json();
        const extractedData = processData(weatherData);
        
        console.log(extractedData);
    } catch (err) {
        if (err == 'Parameter q is missing.') {
            console.log('input the location');
        }
        console.log(err);
    }
}


function processData(data) {
    const processedData = {
        town: data.location.name,
        country: data.location.country,
        lon: data.location.lon,
        lat: data.location.lat, 
        icon: data.current.condition.icon,
        text: data.current.condition.text,
        last_updated: data.current.last_updated,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        humidity: data.current.humidity,
        
    }
    return processedData;
}