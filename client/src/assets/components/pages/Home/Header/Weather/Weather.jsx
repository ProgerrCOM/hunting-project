import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './weather.css'
const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    const API_KEY = '630c18e0be192f729e594aab886e2d09';
    const location = 'Zhytomyr,ua';
    const language = 'uk';

    const weatherConditions = {
        Thunderstorm: 'Гроза',
        Drizzle: 'Мряка',
        Rain: 'Дощ',
        Snow: 'Сніг',
        Mist: 'Туман',
        Smoke: 'Дим',
        Haze: 'Мгла',
        Dust: 'Пил',
        Fog: 'Туман',
        Sand: 'Пісок',
        Ash: 'Попіл',
        Squall: 'Шквал',
        Tornado: 'Торнадо',
        Clear: 'Ясно',
        Clouds: 'Хмарно',
    };

    useEffect(() => {
        getWeather();
    }, []);

    const getWeather = async () => {
        try {
            const response = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=${language}`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
        }
    };

    return (
        <div>
            {weatherData ? (
                <div className="weather">
                    <div className="weather__container">
                        <div className='weather__temp'>
                           <a target='_blank' href="https://ua.sinoptik.ua/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0-%D0%B6%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80"> Коростень : <span>{weatherData.main.temp}(°C)</span> ( {weatherConditions[weatherData.weather[0].main]} )</a>
                        </div>
                    </div>
                    {/*<p>Temperature: {weatherData.main.temp} °C</p>*/}
                    {/*<p>Weather: {weatherData.weather[0].main}</p>*/}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Weather;
