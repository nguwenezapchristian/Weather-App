const location = "london".toLowerCase;
const api_key = "d1613c04ca574939968172503232208"
async function getWeatherData(location) {
    try {
        let link = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`;
        const reponse = await fetch(link);
        const weatherData = reponse.json();
        console.log(weatherData);
    } catch (err) {
        console.log(err);
    }
}