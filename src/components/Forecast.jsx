import React from 'react'

const Forecast = ({title}) => {
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white uppercase">{title}</p>
            </div>
            <hr className="my-2" />
            <div className="flex flex-row justify-between items-center">
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
                </div>
                <div className="flex flex-col justify-center items-center text-white">
                    <p>02:00PM</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt="" />
                    <p>30°</p>
                </div>
         
            </div>
        </div>
    )
}

export default Forecast