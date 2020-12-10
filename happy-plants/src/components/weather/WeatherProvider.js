import React, {useState} from 'react'
import {keys} from '../Settings.js'

export const WeatherContext = React.createContext()
let zip = 37203
export const WeatherProvider = (props) => {
    const [weatherData, setWeather] = useState([])

    const getWeather = () => {
        return fetch(`api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${keys.weatherKey}`)
            .then(res => res.json())
            .then(setWeather)
    }

    return (
        <WeatherContext.Provider value = {{
            weatherData, getWeather
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}