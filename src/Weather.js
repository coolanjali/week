import React from "react";
import "./Weather.css";
export default function Weather(){
    return(
        <div className="container">
            <form>
                <input type="search" placeholder="Enter city name"/>
                <input type="submit" placeholder="Search" className="btn btn-primary"/>
            </form>
            <h2>Paris</h2><span><img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"></img></span>
            <div class="container text-center">
  <div class="row row-cols-2">
    <div class="col">Wednesday 10:00</div>
    <div class="col">Cloudy</div>
    <div class="col">Humidity: 100%</div>
    <div class="col">Wind :12 Km/h</div>
  </div>
   </div>
             </div>

    );
}