import React from 'react'
import "./WeatherList.css"
import { ListItem } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export const WeatherCard = ({ dayWeatherObj, index }) => {
    const URLAddress = `http://openweathermap.org/img/wn/${dayWeatherObj.weather[0].icon}.png`;
    if (dayWeatherObj.dt_txt.includes("12:00:00")) {
        return (
            <ListItem key={index} className="forecast-cell">
                <Typography variant="h5" component="h2">

                    {new Date(dayWeatherObj.dt * 1000).toLocaleDateString('en-US', { weekday: "short" })}

                </Typography>
                <Typography color="textSecondary">
                    {new Date(dayWeatherObj.dt * 1000).toLocaleDateString('en-US', { month: "numeric", day: "numeric" })}
                </Typography>
                <img className="weatherCard__icon" src={URLAddress} alt={dayWeatherObj.weather[0].description} />
                <Typography color="textSecondary">{((dayWeatherObj.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(1)}&#8457;

                </Typography>
                {/* <div className="weatherCard__atmosphere">{dayWeatherObj.weather[0].description}</div> */}
                {/* <h4 className="weatherCard__windSpeed">Wind Speed: {(dayWeatherObj.wind.speed / 1.609).toFixed(2)}mph</h4> */}
                {/* <h4 className="weatherCard__low">Low: {((dayWeatherObj.main.temp_min - 273.15) * (9 / 5) + 32).toFixed(1)}&#8457;</h4> */}
                {/* <h4 className="weatherCard__humidity">Humidity: {dayWeatherObj.main.humidity}&#37;</h4> */}
                {/* <h4 className="weatherCard__uvi">Time of Weather: {dayWeatherObj.dt_txt}</h4> */}
            </ListItem>
        )
    } else { return <div></div> }
}


