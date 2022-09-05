import React from "react";
import './WeatherCard.css';
import ExtraInfo from "./ExtraInfo";

class WeatherCard extends React.Component {
    render() {
        const location = this.props.location;
        const current = this.props.current;
        const condition = this.props.condition;
        const lastUpdate = Math.floor((location.localtime_epoch - current.last_updated_epoch) / 60);
        return (
            <div className="container" style={{ backgroundImage: `linear-gradient(4deg, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.3) 100%),url(${this.props.unsplash})` }}>
                <p className="city">
                    <i className="fas fa-map-marker-alt" style={{ marginRight: "5px", fontSize: "14px" }}></i>
                    {location.name}</p>
                <p className="country">{location.country}</p>
                <p className="temp">{current.temp_c}<span id="c">&deg;c</span></p>
                <div className="holder">
                    <p className="text">{condition.text}</p>
                    <img alt="" src={condition.icon} />
                </div>
                <ExtraInfo extra={current} />
                <p className="last">Last Update<span>{lastUpdate} Min Ago</span></p>
            </div>
        )
    }
};
export default WeatherCard;