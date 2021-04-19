import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from "./WeatherProvider";
import { WeatherCard } from "./WeatherCard"
import { UserContext } from '../user/UserProvider';
import { ListItem, Toolbar, Tabs } from '@material-ui/core';
import "./WeatherList.css"

export const WeatherList = (props) => {
    const { weatherData, getWeather } = useContext(WeatherContext)
    const { activeUser, getActiveUser } = useContext(UserContext)
    const [weather, setWeather] = useState([])

    // debugger
    useEffect(() => {
        getActiveUser()
    }, [])

    useEffect(() => {
        if (activeUser) {
            getWeather(parseInt(activeUser.zip))
            console.log(activeUser.zip);
        } else { return }
    }, [activeUser])

    useEffect(() => {

        setWeather(weatherData.list)
    }, [weatherData])

    if (weather) {

        return <div>
        <div className="horiz-menu">
        <Toolbar>
            <Tabs scrollable scrollButtons="auto" className="forecast-area">

            {
                weather.map(dayWeatherObj => <WeatherCard index= {dayWeatherObj.id} dayWeatherObj={dayWeatherObj} props={props} />)
            }

            </Tabs>
        </Toolbar>
        </div>
        </div>
    } else { return <div> </div> }
}
