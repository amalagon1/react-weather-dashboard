import React from 'react';
import ForecastCard from './ForecastCard';

const Forecast = ({ forecastData, dayNames }) => {


    return (
        <section className="forecast">
            <h2>8-day forecast</h2>
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
        </section>

    )
}

export default Forecast
