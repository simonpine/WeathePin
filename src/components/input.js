import React from "react";
function Input( props ) {
    return (
        <form onSubmit={props.getWeather}>
            <input id="cityInput" placeholder='New York'></input>
            <input type="submit" value='search'></input>
        </form>
    );
  }
  
  export default Input;