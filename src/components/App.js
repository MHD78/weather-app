import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

class App extends React.Component {

    state = { current: {}, location: {}, condition: {}, unsplash: [] };

    async inputHandler(input) {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=7aa29d79f1dc42b094390748210412', {
            params: {
                q: input,
                aqi: "no"
            }
        });
        this.setState({ current: response.data.current });
        this.setState({ location: response.data.location });
        this.setState({ condition: response.data.current.condition });

        const unsplash = await axios.get('https://api.unsplash.com/search/photos/?client_id=SEV07Bha1qERiei7cGuZK-c7ZVHlO-7Iy0FuUiLo5yQ', {
            params: {
                query: `${input}  ${this.state.location.country}`
            }
        });
        this.setState({ unsplash: unsplash.data.results[0].urls.regular });
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.inputHandler.bind(this)} />
                <WeatherCard
                    location={this.state.location}
                    current={this.state.current}
                    condition={this.state.condition}
                    unsplash={this.state.unsplash} />
            </div>
        );
    }
}


export default App;