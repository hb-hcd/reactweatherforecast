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

const TemperatureDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-4 text-xl text-cyan-200">
        <p>Weather</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-20" />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-md items-center justify-center">
            <UilTemperature className="mr-1" />
            Feels like:
            <span className=" ml-1 font-normal">36°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear className="mr-1" />
            Humidity:
            <span className=" ml-1 font-normal">45%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind className="mr-1" />
            Wind:
            <span className=" ml-1 font-normal">11 km/h</span>
          </div>
        </div>
      </div>
   
      
        <div className="flex flex-row items-center justify-around space-x-2 text-white py-3 text-md">
          <UilSun />
          Rise: <p className="font-light">
            <span>06:45 AM</span>
          </p>
          <p className="font-light">|</p>
          <UilSunset />
          Set: <p className="font-light">
            <span>09:45 PM</span>
          </p>
          <p className="font-light">|</p>
          < UilArrowUp/>
          High:<p className="font-light">
            <span>36°</span>
          </p>
          <p className="font-light">|</p>
          <UilArrowDown />
          Low: <p className="font-light">
            <span>30°</span>
          </p>
        </div>
   

     
    </div>
  )
}

export default TemperatureDetails