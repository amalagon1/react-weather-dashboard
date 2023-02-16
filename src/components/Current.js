import React from 'react'

const Current = ({ data, city }) => {
    // console.log(data);
    const icon = data.weather[0].icon;
    console.log(Math.floor(data['main']['temp']));
    return (
        <div className="card">
            <h1>Today</h1>
            <h1>{city}</h1>
            <h2>{Math.floor(data['main']['temp'])}°</h2>
            <p>Feels like: {Math.floor(data['main']['feels_like'])}°</p>
            <p>{data.weather[0].description}</p>
            <img src={"https://openweathermap.org/img/w/" + icon + ".png"}></img>
        </div>
    )
}

export default Current
