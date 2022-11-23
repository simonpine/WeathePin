import logo from './img/logo1.svg';
import './App.css';
import React from 'react';
import Input from './components/input';
import { useState, useEffect } from 'react'
import Result from './components/result';

function App() {
  const [weather, setWeather] = useState('20 c')
  const [h, setH] = useState('night')
  const [icon, setIcon] = useState('01d')
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
    await setWeather(`${data0.main.temp} c`)
    await setIcon(`${data0.weather[0].icon}`);
    const hour = await new Date().getHours()
    await hour > 6 && hour < 18? setH('day') : setH('night')
  }
  function submit(evt) {
    evt.preventDefault()
    const key = '44b1a28f33497d44372ca1c66e49be29'
    const city = evt.target[0].value
    getEverything(key, city)
}
  return (
    <div className="App">
      <div className='blur'>
        <Input getWeather={submit} ></Input>
        <Result ico={icon}></Result>
      </div>
      <img className="backGround" src={`bg/${h}.jpg`}></img>
    </div>
  );
}

export default App;
