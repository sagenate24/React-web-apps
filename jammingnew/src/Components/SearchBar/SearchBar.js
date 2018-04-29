import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.keyDownSearch = this.keyDownSearch.bind(this);
    }

    search() {
        this.props.onSearch(this.state.searchTerm);
    }

    handleTermChange(e) {
        this.setState({ searchTerm: e.target.value });
    }


    keyDownSearch(event) {
        if (event.key === 'Enter') {
            this.search();
        }
    }

    render() {
        return (
            <div className="backgroundImage">
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.keyDownSearch} />
                <a onClick={this.search}>SEARCH</a>
            </div>
            </div>
        );
    }
}


export default SearchBar;