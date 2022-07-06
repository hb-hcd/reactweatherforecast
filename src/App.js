import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails.jsx';
import Forecast from './components/Forecast';
import {getFormattedWeatherData} from './services/weather API';


function App() {

  
  const fetchData = async ()=>{
      //const data= await getFormattedWeatherData({q:'london',units:'metric'});
      const data= await getFormattedWeatherData({q:'london'});
     // const forecast = await getWeatherForecastData({lat:data.lat,lon:data.lon,exclude:'current,minutely,alerts'});
      console.log(data);
  }
  fetchData();
  return (
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
          <TopButtons/>
          <Inputs/>
          <TimeAndLocation/>
          <TemperatureDetails/>
          <Forecast title={"hourly forecast"}/>
          <Forecast title={"daily forecast"}/>
      </div>
  );
}

export default App;
