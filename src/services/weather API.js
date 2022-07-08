import { DateTime } from "luxon";

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5"
//https://api.openweathermap.org/data/2.5/weather?q=london&appid=33fe2c7bbf35b409e375473ceb489a70&units=metrics
//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&appid=33fe2c7bbf35b409e375473ceb489a70&units=metrics

const getWeatherData = async (dataType, searchParams) => {
    const url = new URL(BASE_URL + "/" + dataType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        wind: { speed },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
    } = data
    const { main: details, icon } = weather[0];
    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, speed, name, dt, country, sunrise, sunset, details, icon }
}

const getFormattedWeatherData = async (searchParams) => {
    const data = await getWeatherData('weather', searchParams);
    const formattedCurrentWeather = formatCurrentWeather(data);
    const { lat, lon } = formattedCurrentWeather

    const forecast = await getWeatherData('onecall',
        {
            lat,
            lon,
            exclude: 'current,minutely,alerts',
            units: searchParams.units
        });
    const formattedForecastWeather = formatForecast(forecast);
    return {...formattedCurrentWeather,...formattedForecastWeather}
}

const formatForecast = (data) => {
    let { timezone, daily, hourly } = data;
    const hourlyForecast = hourly.slice(1, 6).map(h => {
        return {
            title: formatLocalTime(h.dt, timezone, 'hh:mm a'),
            temp: h.temp,
            icon: h.weather[0].icon
        }
    });
    const dailyForecast = daily.slice(1, 6).map(d => {
        return {
            title: formatLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });
    return { hourlyForecast, dailyForecast, timezone }
}

const formatLocalTime = (secs, zone, format = "ccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
const iconUrlCode =(code)=>`http://openweathermap.org/img/wn/${code}@2x.png`;

export { getFormattedWeatherData,iconUrlCode,formatLocalTime };