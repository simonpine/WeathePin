import logo from './img/logo1.svg';
import './App.css';
import React from 'react';
import Input from './components/input';
import { useState, useEffect } from 'react'
import Result from './components/result';

function App() {
  const [colorForAll, setColorForAll] = useState({
    backgroundColor: 'rgba(0, 0, 0, 0.568)',
  })
  const [colorForAll2, setColorForAll2] = useState({
    filter: 'none',
  })
  const [units, setUnits] = useState('metric')
  const [units2, setUnits2] = useState('C')
  const [city, setCity] = useState('New York')
  const [temp, setTemp] = useState('20°C')
  const [humi, setHumi] = useState('20%')
  const [windSpeed, setSp] = useState('6.2 km/h')
  const [weather, setWeather] = useState('Sunny')
  const [icon, setIcon] = useState('01d')
  const [bgImg, setBgImgn] = useState('landScape,city')
  const getEverything = async (ky, where) => { 
    const all = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${where}&appid=${ky}&units=${units}`);
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
      if(!span.main){
        console.log('404')
      }
      else{
        console.log(span);
        setTemp(`${span.main.temp}°${units2}`)
        setIcon(`${span.weather[0].icon}`);
        setWeather(`${span.weather[0].description}`)
        setHumi(`${span.main.humidity}%`)
        setSp(`${span.wind.speed} km/h`)
        setCity(span.name)
        const city2 = city.replace(' ', '-')
        setBgImgn(city2)
      }
    })
  }
  function color( color1, color2 ){
      const colorForAllJASON = JSON.stringify(color1)
      localStorage.setItem('getColor', colorForAllJASON)
      const colorForAll2JASON = JSON.stringify(color2)
      localStorage.setItem('getColor2', colorForAll2JASON)
    setColorForAll(JSON.parse(localStorage.getItem('getColor')))
    setColorForAll2(JSON.parse(localStorage.getItem('getColor2')))
  }
  useEffect(()=>{
    if(localStorage.length == 0){
      const colorForAllJASON = JSON.stringify(colorForAll)
      localStorage.setItem('getColor', colorForAllJASON)
      const colorForAll2JASON = JSON.stringify(colorForAll2)
      localStorage.setItem('getColor2', colorForAll2JASON)
    }
    setColorForAll(JSON.parse(localStorage.getItem('getColor')))
    setColorForAll2(JSON.parse(localStorage.getItem('getColor2')))

  }, [])
  return (
    <div className="App" style={styApp}>
      <div className='blur' style={colorForAll}>
        <Input getWeather={submit} setUnits={setUnits} setUnits2={setUnits2} colorForAll={colorForAll} setColorForAll={setColorForAll} color={color} colorForAll2={colorForAll2}></Input>
        <Result icon={icon} temp={temp} city={city} weather={weather} humi={humi} windSpeed={windSpeed} colorForAll2={colorForAll2}></Result>
      </div>
    </div>
  );
}

export default App;
