import React from "react";
import './SearchBar.css';
class SearchBar extends React.Component {

    state = { input: "" };

    onInputChange = (event) => {
        this.setState({ input: event.target.value })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.input);
    }

    render() {
        return (
            <div className="wraper ui search">
                <form className="ui icon input" onSubmit={this.onFormSubmit}>
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search a city name!"
                        required
                        value={this.state.input}
                        onChange={this.onInputChange}
                    />
                    <i className="search icon"></i>
                </form>
            </div>
        );
    }
}


export default SearchBar;