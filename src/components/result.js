import React from "react";
function Result( props ) {
    console.log(props)
    return (
        <div>
            <h1>hola</h1>
            <img src={`icons/${props.ico}.svg`}/>
        </div>
    );
  }
  
  export default Result;