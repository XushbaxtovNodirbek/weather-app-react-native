const WeatherModel = {
    getIcons:function(icon){
        switch(icon){
            case '01d': return require('../assets/weather-icons/01d.png');break;
            case '01n': return require('../assets/weather-icons/01n.png');break;
            case '02d': return require('../assets/weather-icons/02d.png');break;
            case '02n': return require('../assets/weather-icons/02n.png');break;
            case '03d': return require('../assets/weather-icons/03d.png');break;
            case '03n': return require('../assets/weather-icons/03n.png');break;
            case '04d': return require('../assets/weather-icons/04d.png');break;
            case '04n': return require('../assets/weather-icons/04n.png');break;
            case '09d': return require('../assets/weather-icons/09d.png');break;
            case '09n': return require('../assets/weather-icons/09n.png');break;
            case '10d': return require('../assets/weather-icons/10d.png');break;
            case '10n': return require('../assets/weather-icons/10n.png');break;
            case '11d': return require('../assets/weather-icons/11d.png');break;
            case '11n': return require('../assets/weather-icons/11n.png');break;
            case '13d': return require('../assets/weather-icons/13d.png');break;
            case '13n': return require('../assets/weather-icons/13n.png');break;
            case '50d': return require('../assets/weather-icons/50d.png');break;
            case '50n': return require('../assets/weather-icons/50n.png');break;
            default: return require('../assets/weather-icons/default.png');
        }
    }
}

export default WeatherModel;