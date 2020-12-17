import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from "./WeatherProvider";
import { WeatherCard } from "./WeatherCard"
import { UserContext } from '../user/UserProvider';

export const WeatherList = (props) => {
    const { weatherData, getWeather } = useContext(WeatherContext)
    const { activeUser, getActiveUser } = useContext(UserContext)
    const [ weather, setWeather] = useState([])
    const [ user, setUser] = useState([])
// debugger
    useEffect(() => {
        getActiveUser()
    }, [])

    useEffect(() => {
        if (activeUser) {
            getWeather(parseInt(activeUser.zip))
            console.log(activeUser.zip);
        } else {return}
    }, [activeUser])

    useEffect(() => {
        
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
