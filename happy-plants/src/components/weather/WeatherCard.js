import React from 'react'

export const WeatherCard = ({ dayWeatherObj }) => {
    const URLAddress = `http://openweathermap.org/img/wn/${dayWeatherObj.weather[0].icon}.png`;
    if (dayWeatherObj.dt_txt.includes("12:00:00")) {
        return (
            <section className="weatherCard">
                <h3 className="weatherCard__date">{new Date(dayWeatherObj.dt * 1000).toLocaleDateString('en-US', { weekday: "long", month: "long", day: "numeric" })}</h3>
                <img className="weatherCard__icon" src={URLAddress} alt={dayWeatherObj.weather[0].description} />
                <h4 className="weatherCard__atmosphere">{dayWeatherObj.weather[0].main}: {dayWeatherObj.weather[0].description}</h4>
                <h4 className="weatherCard__windSpeed">Wind Speed: {(dayWeatherObj.wind.speed / 1.609).toFixed(2)}mph</h4>
                <h4 className="weatherCard__high">High: {((dayWeatherObj.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(1)}&#8457;</h4>
                <h4 className="weatherCard__low">Low: {((dayWeatherObj.main.temp_min - 273.15) * (9 / 5) + 32).toFixed(1)}&#8457;</h4>
                <h4 className="weatherCard__humidity">Humidity: {dayWeatherObj.main.humidity}&#37;</h4>
                {/* <h4 className="weatherCard__uvi">Time of Weather: {dayWeatherObj.dt_txt}</h4> */}
            </section>
        )} else {return <div></div>}
}
