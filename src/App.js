import React, { useState } from 'react';
import Search from './components/Search';
import Current from './components/Current';
import Header from './components/Header';
import './App.css';

function App() {

  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [addCity, setAddCity] = useState(false);

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
    fetch(fiveDayUrl + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial&exclude=hourly,minutely,current,alerts")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const daily = data.daily;
      })
  }

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
    </div>
  );
}

export default App;
