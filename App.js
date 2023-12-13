import MainPage from './components/main/MainPage';
import Loader from './components/loader/loader';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';  
import { useFonts } from 'expo-font'
import { getCurrentWeatherByCord , getCurrentWeatherByCity } from './services/api.service';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather,setWeather] = useState({});
  const [] = useFonts({
    'NotoSans_Condensed-Regular': require('./assets/fonts/NotoSans_Condensed-Regular.ttf'),
    'NotoSans_Condensed-SemiBold': require('./assets/fonts/NotoSans_Condensed-SemiBold.ttf'),
  });

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
    Location.getCurrentPositionAsync({}).then((location) =>{
      getCurrentWeatherByCord(location.coords.latitude,location.coords.longitude).then((weather)=>{
        setWeather(weather);
        setIsLoading(false);
      })
    })
  }

  const getWeatherByCity = async (city) => {
    setIsLoading(true);
    getCurrentWeatherByCity(city).then((weather)=>{
      setWeather(weather);
      setIsLoading(false);
    }).catch((error)=>{
      console.log(error);
      setWeather({...weather,err:'City not found'});
      setIsLoading(false);
    })
  }

  useEffect(()=>{
    getLocation();
  },[])

  return isLoading ? <Loader/> : <MainPage weather= {weather} getWeatherByCity={getWeatherByCity}/>;
}
