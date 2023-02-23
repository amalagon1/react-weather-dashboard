import React, { useState } from 'react';
import Search from './components/Search';
import Current from './components/Current';
import Header from './components/Header';
import Forecast from './components/Forecast';
import Hourly from './components/Hourly';
import './App.css';

function App() {

  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [addCity, setAddCity] = useState(false);
  const [currentCondition, setCurrentCondition] = useState("");
  const [forecastData, setForecastData] = useState();
  const [hourlyData, setHourlyData] = useState();



  const currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=";
  const apiKey = "5686c46a54707e23e5474e6b38ba9744";


  const displayCurrent = () => {
    fetch(currentUrl + city + "&Appid=" + apiKey + "&units=imperial")

      .then(response => response.json())
      .then(data => {
        let lat = data.coord.lat
        let lon = data.coord.lon
        console.log(data)
        setData(data)
        displayForecast(lat, lon);
      })
    // setCity(e.target.value)
    setAddCity(false);

  }

  const displayForecast = (lat, lon) => {
    fetch(fiveDayUrl + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial&exclude=minutely,current,alerts")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const daily = data.daily;
        const hourly = data.hourly;
        const hours = (new Date(hourly[2].dt * 1000));
        // const currentHour = hours % 12;
        console.log('hello')
        console.log(hours);
        setForecastData(daily);
        setHourlyData(hourly);

      })
  }
  // const hello = JSON.stringify(new Date().getDay());
  // console.log(dayNames.at(JSON.stringify(new Date().getDay())));
  return (
    <div className="App">
      <div onClick={() => { setAddCity(false) }}
        className={addCity ? "backdrop" : "backdrop=hide"}></div>
      <Header city={city}
        setCity={setCity}
        addCity={addCity}
        setAddCity={setAddCity}
        displayCurrent={displayCurrent} />
      {addCity && <Search setCity={setCity} displayCurrent={displayCurrent} />}
      {data && <Current data={data} city={city} />}
      <section className="hourly-container">
        {hourlyData && hourlyData.map((hour) =>
          <Hourly
            hour={(new Date(hour.dt * 1000).getHours() % 12 || 12)}
            amorpm={(new Date(hour.dt * 1000).getHours() >= 12 ? 'PM' : 'AM')}
            icon={hour.weather[0].icon} />

        )}
      </section>
      {/* {forecastData &&
        <h2>8 day forecast</h2>} */}

      {forecastData && <Forecast
        forecastData={forecastData}
      />}
    </div>
  );
}

export default App;
