import axios from 'axios';

const getCurrentWeatherByCord = async (lat,lon) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&appid=0546bb7aafd0079f1498fda658c1b57a&lat=${lat}&lon=${lon}`)
    return await data
}

const getCurrentWeatherByCity = async (city) => {
    const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&q=${city}&appid=0546bb7aafd0079f1498fda658c1b57a`)
    return await data
}

export  {getCurrentWeatherByCord , getCurrentWeatherByCity };

