import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails.jsx';
import Forecast from './components/Forecast';
import { getWeatherData } from './services/weather API';
import { useState, useEffect } from 'react';
import { data } from 'autoprefixer';


function App() {
  const [city, setCity] = useState("Winnipeg")
  const [basicData, setBasicData] = useState(null);
  const fetchWeather = async (city) => {
    const data = await getWeatherData("weather", { q: city })
    return data;
  }

  useEffect(() => {
    getWeatherData("weather", { q: city }).then(data => setBasicData(data));
  }, [])

  const searchCity = (e) => {
    setCity(e.target.value);
  }

  console.log(city);
  console.log(basicData);


  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs search={searchCity} fetchWeather={fetchWeather} />
      <TimeAndLocation />
      <TemperatureDetails />
      <Forecast title={"hourly forecast"} />
      <Forecast title={"daily forecast"} />
    </div>
  );
}

export default App;
