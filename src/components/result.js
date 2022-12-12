import React from "react";
function Result( {icon, weather, city} ) {
    console.log(icon)
    return (
        <div>
            <h1>{city}</h1>
            <h1>{weather}</h1>
            <img src={`icons/${icon}.svg`}/>
        </div>
    );
  }
  
  export default Result;