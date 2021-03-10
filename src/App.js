import React, { useEffect, useState } from "react";
import "./App.css";
const api = {
  key: "bfd9582d5f819cead75f235a0f56f124",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  // const [query, setQuery] = useState("");
  // const [temp, setTemp] = useState("");
  // const [city, setCity] = useState("");

  // const search = (evt) => {
  //   if (evt.key === "Enter") {
  //     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //       .then((res) => res.json())
  //       .then((result) => console.log(result));
  //   }
  // };

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
            // onChange={(e) => setQuery(e.target.value)}
            // value ={query}
            // onKeyPreess={search}
          />
          </div>
      <div className="weather__detail">
        <h3>New Delhi, India</h3>
        <h1>20</h1>
      </div>
      
    </div>
  );
}

export default App;
