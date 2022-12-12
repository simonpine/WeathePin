import logo from './img/logo1.svg';
import './App.css';
import React from 'react';
import Input from './components/input';
import { useState, useEffect } from 'react'
import Result from './components/result';

function App() {
  const [city, setCity] = useState('New York')
  const [weather, setWeather] = useState('sunny')
  const [icon, setIcon] = useState('01d')
  const [bgImg, setBgImgn] = useState('landScape,city')
  const getEverything = async (ky, where) => { 
    const all = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${where}&appid=${ky}&units=metric`);
    const data0 = await all.json()
    return data0
  }
  const styApp = {
    backgroundImage: `url(https://source.unsplash.com/1600x900/?${bgImg},city)`,
  }
  function submit(evt) {
    evt.preventDefault()
    const key = '44b1a28f33497d44372ca1c66e49be29'
    const city = evt.target[0].value
    getEverything(key, city)
    .then((span) => {
      if(span.cod === '404'){
        console.log(span)
      }
      else{
        console.log(span);
        setWeather(`${span.main.temp} c`)
        setIcon(`${span.weather[0].icon}`);
        setCity(span.name)
        const city2 = city.replace(' ', '-')
        setBgImgn(city2)
      }
    })
}
  return (
    <div className="App" style={styApp}>
      <div className='blur'>
        <Input getWeather={submit} ></Input>
        <Result icon={icon} weather={weather} city={city}></Result>
      </div>
    </div>
  );
}

export default App;
