import React, { useState } from 'react';
import Search from './components/Search';
import Current from './components/Current';
import Header from './components/Header';
import './App.css';

function App() {

  const [city, setCity] = useState("");
  const [data, setData] = useState()

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
      })
  }

  return (
    <div className="App">
      <Header city={city} setCity={setCity} displayCurrent={displayCurrent} />
      {data && <Current data={data} city={city} />}
    </div>
  );
}

export default App;
