import React from 'react'

var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var month = months[(new Date).getMonth()];
function Heading() {
    return (
        <div>
         <h1 className="heading">{month}</h1>   
        </div>
    )}

export default Heading;