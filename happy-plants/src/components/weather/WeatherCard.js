import React from 'react'

export const WeatherCard = ({api}) => (

    <div className="weatherCard"> Weather Test Card
        {/* <h3 className="weatherCard__date">${new Date(api.dt*1000).toLocaleDateString('en-US', {weekday: "long", month: "long", day: "numeric"})}</h3> */}
        {/* <img className="weatherCard__icon" src="http://openweathermap.org/img/wn/${api.weather[0].icon}@2x.png">
        <h4 className="weatherCard__atmosphere">${api.weather[0].main}: ${api.weather[0].description}</h4>
        <h4 className="weatherCard__windSpeed">Wind Speed: ${(api.wind_speed/1.609).toFixed(2)}mph</h4>
        <h4 className="weatherCard__high">High: ${((api.temp.max-273.15)*(9/5)+32).toFixed(1)}&#8457;</h4>
        <h4 className="weatherCard__low">Low: ${((api.temp.min-273.15)*(9/5)+32).toFixed(1)}&#8457;</h4>
        <h4 className="weatherCard__humidity">Humidity: ${api.humidity}&#37;</h4> */}
        <h4 className="weatherCard__uvi">UV Index: ${api.uvi}</h4>
    </div>
)
