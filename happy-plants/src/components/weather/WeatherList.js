import React, { useContext, useEffect} from 'react'
import { WeatherContext } from "./WeatherProvider";
import {WeatherCard} from "./WeatherCard"


export const WeatherList = () => {

    const { weatherData, getWeather } = useContext(WeatherContext)

    useEffect(() => {
        getWeather()
        }, [])
        
    useEffect(() => {
        console.log("test to see if the array of results came back", weatherData.list)
        }, [weatherData])
    
    // if (weatherData.length) {
    return <div className="weather_results">
    
    {
        Object.values(weatherData).map(dayWeather => <WeatherCard key={dayWeather.id} dayWeather={dayWeather} />)
    }
    </div>
    // } else {return <div>waiting on weather</div>}
    }
