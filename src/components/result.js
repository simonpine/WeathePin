import React from "react";
function Result( {icon, temp, city, weather, humi, windSpeed, colorForAll2} ) {
    return (
        <div style={colorForAll2} className="results">
            <h2 className="city">Weather of {city}</h2>
            <h1>{temp}</h1>
            <div>
                <h2 className="weather2"><img className="imgWeather" src={`icons/${icon}.svg`}/> {weather}</h2>    
                <h2 className="weather">Humidity: {humi}</h2>
                <h2 className="weather">Wind speed: {windSpeed}</h2>
            </div>
        </div>
    );
  }
  
  export default Result;