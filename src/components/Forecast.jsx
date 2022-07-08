import React from 'react'
import { iconUrlCode } from '../services/weather API';

const Forecast = ({ title, weather }) => {

    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white uppercase">{title}</p>
            </div>
            <hr className="my-2" />
            <div className="flex flex-row justify-between items-center">

                {weather.map(
                        item => (
                            <div key={item.title} className="flex flex-col justify-center items-center text-white">
                                <p>{item.title}</p>
                                <img src={iconUrlCode(item.icon)} className="w-12 my-1" alt="" />
                                <p>{item.temp.toFixed()}°</p>
                            </div>
                        )
                    )  
                }
                {/* 
                <div className="flex flex-col justify-center items-center text-white">
                    <p>02:00PM</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt="" />
                    <p>30°</p>
                </div>
                <div className="flex flex-col justify-center items-center text-white">
                    <p>02:00PM</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt="" />
                    <p>30°</p>
                </div>
                <div className="flex flex-col justify-center items-center text-white">
                    <p>02:00PM</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt="" />
                    <p>30°</p>
                </div>
                <div className="flex flex-col justify-center items-center text-white">
                    <p>02:00PM</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt="" />
                    <p>30°</p>
                </div> */}

            </div>
        </div>
    )
}

export default Forecast