import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from "./WeatherProvider";
import { WeatherCard } from "./WeatherCard"

export const WeatherList = (props) => {
    const { getWeather, weatherData } = useContext(WeatherContext)
    const [ weather, setWeather] = useState([])
// debugger
    useEffect(() => {
        getWeather()
    }, [])

    useEffect(() => {
        // console.log("test to see if the array of results came back", weatherData.list)
        setWeather(weatherData.list)
    }, [weatherData])

    if (weather) {
        // console.log(weather)
        return <div className="weather_results">
            {
                weather.map(dayWeatherObj => <WeatherCard key={dayWeatherObj.dt} dayWeatherObj={dayWeatherObj} props={props}/>)
            }
        </div>
    } else { return <div> </div> }
}
