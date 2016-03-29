import React from 'react';
import { Component } from 'react';


export default class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {searchInput:''}
    }
    
    render() {
        return (
            <div className="search-bar">
                {/* input is a Controlled Component in that the value only changes 
                    when the state changes */}
                <input 
                    value={this.state.searchInput}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }
    
    onInputChange(searchTerm) {
        this.setState({searchInput: searchTerm});
        {/* Callback to pass search term to parent */}
        this.props.onSearchTermChange(searchTerm);
    }  
}

