import React from "react";
import "./Weather.css";
export default function Weather(){
    return(
        <div className="placeHolder">
            <form>
                <input type="search" placeholder="Enter city name"/>
                <input type="submit" placeholder="Search" className="btn btn-primary"/>
            </form>
            <h2>Paris</h2>
            <ul>
                <li>Wednesday 15:00</li>
                <li>Rainy</li>
            </ul>
            
        </div>

    );
}