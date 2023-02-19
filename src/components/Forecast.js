import React from 'react';
import ForecastCard from './ForecastCard';

const Forecast = ({ forecastData, dayNames }) => {

    const today = new Date(forecastData[0].dt * 1000);
    console.log(today)
    // console.log(today.getDay())

    // console.log(today.getDay());
    return (
        <div className="forecast-container">
            {forecastData && forecastData.map((forecast) =>
                <ForecastCard
                    // date={dayNames.at(JSON.stringify(new Date(forecast.dt).getDay()))}
                    date={new Date(forecast.dt * 1000).toString().split(" ")[0]}
                    highTemp={Math.floor(forecast.temp.max)}
                    lowTemp={Math.floor(forecast.temp.min)}
                    icon={forecast.weather[0].icon}
                    condition={forecast.weather[0].description} />)}

        </div>
    )
}

export default Forecast
