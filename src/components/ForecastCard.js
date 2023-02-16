import React from 'react'

const ForecastCard = ({ id, forecastData, humidity, icon }) => {
    var gsDayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    // var d = new Date()
    // var day = d.split("")[0];
    // console.log(day)
    // var dayName = gsDayNames[d.getDay()];
    // console.log(d)
    // console.log(dayName);
    // console.log(d);

    const hello = ("wed feb 15")
    const days = hello.split(" ")[0]
    console.log(days)

    // const date = new Date(1676480400)
    // console.log(date)


    return (
        <div className="forecast-card">
            {/* <img src={"https://openweathermap.org/img/w/" + icon + ".png"}></img> */}
            <p>{humidity}</p>
            <img src={"https://openweathermap.org/img/w/" + icon + ".png"}></img>
        </div>
    )
}

export default ForecastCard
