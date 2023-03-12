import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Current from './components/Current';
import Header from './components/Header';
import Forecast from './components/Forecast';
import Hourly from './components/Hourly';
import Night from './images/night.jpg';
import Cloudy from './images/cloudy.jpg';
import Sunny from './images/sunny.jpg';
import './App.css';

function App() {

  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState();
  const [addCity, setAddCity] = useState(true);
  const [currentCondition, setCurrentCondition] = useState("");
  const [forecastData, setForecastData] = useState();
  const [hourlyData, setHourlyData] = useState();
  const [background, setBackground] = useState();



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
        setCityData(data)
        displayForecast(lat, lon);

        let latestCondition = data.weather[0].main;
        console.log(latestCondition);
        setCurrentCondition(latestCondition);
        // latestCondition === "Cloudy" ? console.log('yes') : console.log("no");
      })
    // setCity(e.target.value)
    setAddCity(false);

  }

  // const backgroundHandler = (latestCondition) => {
  //   if 9
  // }

  const displayForecast = (lat, lon) => {
    fetch(fiveDayUrl + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial&exclude=minutely,current,alerts")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const daily = data.daily;
        const hourly = data.hourly;
        hourly.length = 24
        const hours = (new Date(hourly[2].dt * 1000));
        // const currentHour = hours % 12;
        console.log(hourly);
        console.log(hours);

        setForecastData(daily);
        setHourlyData(hourly);

      })
  }
  // const hello = JSON.stringify(new Date().getDay());
  // console.log(dayNames.at(JSON.stringify(new Date().getDay())));

  // useEffect(() => {
  //   currentCondition === "Rain" ? setBackground(Cloudy) : setBackground(Night);
  // }, [currentCondition]);

  useEffect(() => {
    switch (currentCondition) {
      case "Rain":
        setBackground(Cloudy);
        break;
      case "Mist":
        setBackground(Cloudy);
        break;
      case "Haze":
        setBackground(Cloudy);
        break;
      case "Clouds":
        setBackground(Cloudy);
        break;
      case "Clear":
        setBackground(Sunny);
        break;
      default:
        setBackground(Sunny);
    }
  }, [currentCondition])

  return (

    <div className="App" style={{
      backgroundImage: "url( " + background + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* <img src={Night}></img> */}
      < div onClick={() => { setAddCity(false) }}
        className={addCity && cityData ? "backdrop" : "backdrop=hide"}></div >
      <Header city={city}
        setCity={setCity}
        addCity={addCity}
        setAddCity={setAddCity}
        displayCurrent={displayCurrent} />
      {addCity && <Search setCity={setCity} displayCurrent={displayCurrent} />}
      {cityData && <Current cityData={cityData} city={city} />}
      <section className="hourly-container">
        {hourlyData && hourlyData.map((hour) =>
          <Hourly
            hour={(new Date(hour.dt * 1000).getHours() % 12 || 12)}
            amorpm={(new Date(hour.dt * 1000).getHours() >= 12 ? 'PM' : 'AM')}
            icon={hour.weather[0].icon}
            temp={Math.floor(hour.temp)} />

        )}
      </section>
      {/* {forecastData &&
        <h2>8 day forecast</h2>} */}

      {
        forecastData && <Forecast
          forecastData={forecastData}
        />
      }
    </div >
  );
}

export default App;
