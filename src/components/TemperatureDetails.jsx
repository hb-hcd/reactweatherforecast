import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons'
import { formatLocalTime, iconUrlCode } from '../services/weather API';

const TemperatureDetails = ({weather}) => {
  console.log(weather);
  const{details,icon,temp,feels_like,humidity,speed,sunrise,sunset,temp_max,temp_min,timezone} = weather;
  const iconUrl = iconUrlCode(icon);
  return (
    <div>
      <div className="flex items-center justify-center py-4 text-xl text-cyan-200">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrl} alt="" className="w-20" />
        <p className="text-5xl">{temp.toFixed(0)}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-md items-center justify-center">
            <UilTemperature className="mr-1" />
            Feels like:
            <span className=" ml-1 font-normal">{`${feels_like.toFixed()}`}°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear className="mr-1" />
            Humidity:
            <span className=" ml-1 font-normal">{humidity.toFixed()}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind className="mr-1" />
            Wind:
            <span className=" ml-1 font-normal">{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>
   
      
        <div className="flex flex-row items-center justify-around space-x-2 text-white py-3 text-md">
          <UilSun />
          Rise: <p className="font-light">
            <span>{formatLocalTime(sunrise,timezone,'hh:mm a')}</span>
          </p>
          <p className="font-light">|</p>
          <UilSunset />
          Set: <p className="font-light">
            <span>{formatLocalTime(sunset,timezone,'hh:mm a')}</span>
          </p>
          <p className="font-light">|</p>
          < UilArrowUp/>
          High:<p className="font-light">
            <span>{temp_max.toFixed()}°</span>
          </p>
          <p className="font-light">|</p>
          <UilArrowDown />
          Low: <p className="font-light">
            <span>{temp_min.toFixed()}°</span>
          </p>
        </div>
   

     
    </div>
  )
}

export default TemperatureDetails