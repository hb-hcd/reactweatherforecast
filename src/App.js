import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails.jsx';
import Forecast from './components/Forecast';
import { getFormattedWeatherData } from './services/weather API';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [query, setQuery] = useState({ q: 'winnipeg' })
  const [units, setUnits] = useState('metric')
  const [weatherData, setWeatherData] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      //const data= await getFormattedWeatherData({q:'london',units:'metric'});
      const message = query.q ? query.q : "current location."
      toast.info("Fetching weather for "+message)
      await getFormattedWeatherData({ ...query, units }).then(data => {
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)
        setWeatherData(data);

      });
    }
    fetchData();
  }, [query, units])

  const formatBackground = () => {
    if (!weatherData) return "from-cyan-500 to-blue-700";
    const threshould = units === 'metric' ? 27 : 80;
    if (weatherData.temp <= threshould) return "from-cyan-500 to-blue-700";
    return "from-yellow-500 to-orange-700"
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4  py-4 pb-12 px-32 
    bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} query={query} unit={units} />
      {
        weatherData && (
          <div>
            <TimeAndLocation weather={weatherData} />
            <TemperatureDetails weather={weatherData} />
            <Forecast title={"hourly forecast"} weather={weatherData.hourlyForecast} />
            <Forecast title={"daily forecast"} weather={weatherData.dailyForecast} />
          </div>
        )
      }
      < ToastContainer autoClose={5000} theme='colored' />
    </div>
  );
}

export default App;
