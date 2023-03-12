import React from 'react'

const ForecastCard = ({ id,
    forecastData,
    humidity,
    icon,
    date,
    lowTemp,
    highTemp,
    condition }) => {



    const hello = JSON.stringify(new Date().getDay());
    // const days = hello.split(" ")[0]
    // console.log(days)
    console.log(hello);

    // const date = new Date(1676480400)
    // console.log(date)


    return (
        <div className="forecast-card">
            {/* <img src={"https://openweathermap.org/img/w/" + icon + ".png"}></img> */}
            <h2 className="day">{date} </h2>
            {/* <div className="content-wrapper"> */}
            <div className="conditions">
                <p> {lowTemp} / {highTemp} º </p>
                <div className='description'>
                    <p>{condition}</p>
                </div>
            </div>
            <img src={"https://openweathermap.org/img/w/" + icon + ".png"}></img>


            {/* </div> */}
        </div>
    )
}

export default ForecastCard
