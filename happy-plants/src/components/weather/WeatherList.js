import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from "./WeatherProvider";
import { WeatherCard } from "./WeatherCard"

export const WeatherList = () => {

    const { weatherData, getWeather } = useContext(WeatherContext)
    // const [ weather, setWeather] = useState([])

    useEffect(() => {
        getWeather()
    }, [])

    useEffect(() => {
        console.log("test to see if the array of results came back", weatherData.list)
        weatherRender()
    }, [weatherData])

    const weatherRender = () => { 
    if (weatherData.length) {
        let weatherList = weatherData.list
        console.log(weatherList)
        return <div className="weather_results">
            {
                weatherList.map(dayWeatherObj => <WeatherCard key={dayWeatherObj.id} dayWeatherObj={dayWeatherObj} />)
            }
        </div>

    } else { return <div> </div> }}
    
    return <div></div>
}

