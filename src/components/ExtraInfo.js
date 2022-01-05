import React from "react";
import './ExtraInfo.css';

const ExtraInfo = (props) => {
    return (
        <div>
            <ul>
                <li >Real feel <span>{props.extra.feelslike_c} &deg;c</span></li>
                <li >Humidity <span>{props.extra.humidity} %</span></li>
                <li >UV index <span>{props.extra.uv}</span></li>
                <li >Pressure <span>{props.extra.pressure_mb} mb</span></li>
                <li >Wind speed <span>{props.extra.wind_kph} kph</span></li>
                <li >Wind direction <span>{props.extra.wind_dir}</span></li>
            </ul>
        </div>
    )
}

export default ExtraInfo;