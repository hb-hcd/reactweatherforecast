import React from 'react'
import { UilSearch, UilMapPin } from '@iconscout/react-unicons'

const Inputs = ({search,fetchWeather}) => {
    return (
        <div className="flex flex-row justify-center my-6 border-white ">
            <div className="flex flex-row justify-center w-3/4 items-center space-x-4">
                <input type="text"
                    onChange={search}
                    placeholder="search for city..."
                    className="text-xl font-light p-2 w-full shadow-xl rounded-md focus:outline-none h-8 capitalize placeholder:lowercase" />        
                    <UilSearch size={30} className="text-white cursor-pointer hover:scale-125" onClick={fetchWeather}/>
                    <UilMapPin size={30} className="text-white cursor-pointer hover:scale-125"/>
            </div>
            <div className="flex flex-row justify-end w-1/4 items-center">
                    <button name="metric" className="text-white text-xl font-light px-1">°C</button>
                    <p className="text-white">|</p>
                    <button name="imperial" className="text-white text-xl font-light px-1">°F</button>
            </div>
        </div>
    )
}

export default Inputs