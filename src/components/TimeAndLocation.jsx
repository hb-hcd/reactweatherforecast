import React from 'react'
import { formatLocalTime } from '../services/weather API';
const TimeAndLocation = ({weather}) => {
    const {dt,timezone,name, country} = weather
    const localTime = formatLocalTime(dt,timezone);
 
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <div className="text-white font-extralight text-2xl">
                 {localTime}
                </div>
            </div>
            <div className="flex justify-center items-center my-4">
                <p className="text-white text-2xl font-medium ">{name},{country}</p>
                                
            </div>
        </div>
    )
}

export default TimeAndLocation