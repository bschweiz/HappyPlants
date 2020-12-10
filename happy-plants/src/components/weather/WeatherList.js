import React, { useContext, useEffect} from 'react'
import { WeatherContext } from "./WeatherProvider";

export const WeatherList = () => {

    const { weatherData, getWeather } = useContext(WeatherContext)

    useEffect(() => {
        getWeather()
        }, [])
        
    useEffect(() => {
        console.log("test to see if the array of results came back")
        console.log(weatherData)
        }, [weatherData])
        
    // if (fuzzyResultArray.length) {    
    // return <div className="trefle_results">
    // {
    //     fuzzyResultArray.map(pla => <WeatherCard key={pla.id} plant={pla} />)
    // }
    // </div>
    // } else {return <div>Enter a plant name</div>}
    }