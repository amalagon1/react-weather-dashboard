import React from 'react'

const Hourly = ({ hourlyData, hour, icon, amorpm }) => {
    return (
        <div className="hourly-card">
            <div className="time">
                <h1>{hour} <span id="specific">{amorpm} </span></h1>
            </div>
            <img id="icon-hour" src={"https://openweathermap.org/img/w/" + icon + ".png"}></img>
        </div>
    )
}

export default Hourly
