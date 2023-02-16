import React from 'react';
import ForecastCard from './ForecastCard';

const Forecast = ({ forecastData }) => {
    return (
        <div className="forecast-container">
            {forecastData && forecastData.map((forecast) =>
                <ForecastCard
                    icon={forecast.weather[0].icon}
                    humidity={forecast.humidity} />)}
        </div>
    )
}

export default Forecast
