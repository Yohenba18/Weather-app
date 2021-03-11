import React, {  useState } from "react";
import "./App.css";
const api = {
  key: "bfd9582d5f819cead75f235a0f56f124",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery(" ");
          console.log(result)});
    }
  };

  const dateBuilder = d => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Weather App</h1>
        <footer>
        Created with 💖 by{" "}
        <span style={{ color: "purple" }}>
          <strong>Yohenba Kshetrimayum</strong>
        </span>
      </footer>
      </div>
      <div className="form">        
          <input
            type="text"
            placeholder="City Name"
            onChange={(e) => setQuery(e.target.value)}
            value ={query}
            onKeyPress={search}
          />
          </div>
        {(typeof weather.main != "undefined") ? (
      <div className="weather__detail">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <div className="date">{dateBuilder(new Date())}</div>
        <h1>{Math.round(weather.main.temp)}°c</h1>
        <div className="weather-type">{weather.weather[0].main}</div>
      </div>
      
      ) : ('')}
     
    </div>
  );
}

export default App;
