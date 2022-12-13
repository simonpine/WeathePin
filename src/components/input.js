import React from "react";
function Input( {getWeather, setUnits, setUnits2, setUnits3, colorForAll, colorForAll2, color} ) {

    return (
        <form style={colorForAll2} className="search" onSubmit={getWeather}>
            <input className="searchWrite" id="cityInput" placeholder='New York'></input>
            <button className="searchButton" type="submit" value='search'><img className="lup" src="icons/search.png" ></img></button>
            <button className="searchButton" onClick={()=>{ 
                setUnits('imperial') 
                setUnits2('F')
                setUnits3('mph')
                }} type="submit" value='search'>°F</button>
            <button className="searchButton" onClick={()=>{ 
                setUnits('metric') 
                setUnits2('C') 
                setUnits3('km/h')
                }} type="submit" value='search'>°C</button>
            <button className="searchButton" onClick={()=>{ 
                if(colorForAll.backgroundColor === 'rgba(0, 0, 0, 0.568)'){
                    color({
                        backgroundColor: 'rgba(255,255,255, 0.3)',
                    },
                    {
                        filter: 'invert(100%)',
                    }
                    )
                }
                else{
                    color({
                        backgroundColor: 'rgba(0, 0, 0, 0.568)',
                    },
                    {
                        filter: 'none',
                    })
                }
                }}><img className="lup" src="icons/dark.png" ></img></button>
        </form>
    );
  }
  
  export default Input;