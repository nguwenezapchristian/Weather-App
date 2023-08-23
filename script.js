const api_key = "d1613c04ca574939968172503232208";
const listData = document.querySelector('.list');
const img = document.querySelector('img');
const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');

searchBtn.addEventListener('click', () => {
    listData.textContent = "";
    const city = searchInput.value;
    getWeatherData(city);
    searchInput.value = "";
});



async function getWeatherData(location) {
    try {
        let link = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`;
        const reponse = await fetch(link);
        const weatherData = await reponse.json();
        const extractedData = processData(weatherData);
        
        img.src = extractedData.icon;
        for (const key in extractedData) {
            if (key != 'icon') {
                const list = document.createElement('ul');
                list.classList.add('unordered');
                list.textContent = `${key}: ${extractedData[key]}`;
                listData.appendChild(list);
            }
        };
    } catch (err) {
        if (err == 'TypeError') {
            console.log('input a place name');
        } else {
            console.log(err);
        }
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