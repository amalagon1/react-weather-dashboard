import React from 'react'

const Current = ({ cityData, city }) => {
    // console.log(data);
    const icon = cityData.weather[0].icon;
    console.log(Math.floor(cityData['main']['temp']));
    return (
        <div className="card">
            {/* <h1>Today</h1> */}
            <div>
                <h1>{city}</h1>
                <h2>{Math.floor(cityData['main']['temp'])}°</h2>
                <p>Feels like: {Math.floor(cityData['main']['feels_like'])}°</p>
                <p>{cityData.weather[0].description}</p>
            </div>
            <div>
                <img src={"https://openweathermap.org/img/w/" + icon + ".png"}></img>
            </div>
        </div>
    )
}

export default Current
