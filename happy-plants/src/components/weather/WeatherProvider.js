import React, {useState} from 'react'
import {keys} from '../Settings.js'

export const WeatherContext = React.createContext()
// let zip = 37203
// let weather = {}

// export const useWeather = () => weather

export const WeatherProvider = (props) => {

    const [weatherData, setWeather] = useState([])

    const getWeather = (zip) => {
        if (zip) {
            return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&exclude=hourly,minutely,current&appid=${keys.weatherKey}`)
            .then(res => res.json())
            .then( parsedWeather => {
                setWeather(parsedWeather)
                // console.log(parsedWeather)
            })
        } else {return}
    }

    return (
        <WeatherContext.Provider value = {{
            weatherData, getWeather
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}