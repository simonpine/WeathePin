import logo from './img/logo1.svg';
import './App.css';
import React from 'react';
import Input from './components/input';
import { useState, useEffect } from 'react'

function App() {
  const [weather, setWeather] = useState('cloud')
  function newWeather( w ){
    if(!!w){
      setWeather(w)
      console.log(!!w)
    }
    else{
      setWeather('error')
    }
  }
  const getEverything = async (ky, where) => { 
    const all = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${where}&appid=${ky}&units=metric`);
    const data0 = await all.json()
    await console.log(data0);
    await setWeather('error')
    await newWeather(data0.weather[0].main);
  }
  function submit(evt) {
    evt.preventDefault()
    const key = '44b1a28f33497d44372ca1c66e49be29'
    const city = evt.target[0].value
    getEverything(key, city)
}
  return (
    <div className="App">
      <Input getWeather={submit} ></Input>
      <h1>{weather}</h1>
    </div>
  );
}

export default App;
