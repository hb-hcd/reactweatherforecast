import React, { useState } from 'react'
import { UilSearch, UilMapPin } from '@iconscout/react-unicons'
import { ToastContainer, toast } from 'react-toastify';

const Inputs = ({ setUnits, setQuery,unit }) => {

    
    const [city, setCity] = useState("")
    const handleSearchButton = () => {
        if (city.trim() !== '') setQuery({ q: city });
    }
    const handleLocationButton = ()=>{
       if(navigator.geolocation){
            toast.info('Fetching location...')
        navigator.geolocation.getCurrentPosition(position=>{
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            toast.success("Location fetched");
            setQuery({lat,lon})
        })
       }
    }

    const handleUnitSwitch =(e)=>{
        const selectUnit  = e.currentTarget.name;
        if(unit !== selectUnit) setUnits(selectUnit)
        
    }

    return (
        <div className="flex flex-row justify-center my-6 border-white ">
            <div className="flex flex-row justify-center w-3/4 items-center space-x-4">
                <input type="text"
                    placeholder="search for city..."
                    defaultValue={city}
                    className="text-xl font-light p-2 w-full shadow-xl rounded-md focus:outline-none h-8 capitalize placeholder:lowercase"
                    onChange={(e) => setCity(e.currentTarget.value)}
                />
                <UilSearch
                    size={30}
                    className="text-white cursor-pointer hover:scale-125 duration-200"
                    onClick={handleSearchButton} />
                <UilMapPin
                    size={30}
                    className="text-white cursor-pointer hover:scale-125 duration-200" 
                    onClick={handleLocationButton}/>
            </div>
            <div className="flex flex-row justify-end w-1/4 items-center">
                <button
                    name="metric"
                    className="text-white text-xl font-light px-1  hover:scale-125 duration-200"
                    onClick={handleUnitSwitch}
                >°C</button>
                <p className="text-white">|</p>
                <button
                    name="imperial"
                    className="text-white text-xl font-light px-1  hover:scale-125 duration-200"
                    onClick={handleUnitSwitch}
                >°F</button>
            </div>
           
        </div>
    )
}

export default Inputs