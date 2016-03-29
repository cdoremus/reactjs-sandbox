import React from 'react';
import { Component } from 'react';
import {DEFAULT_SEARCH_TERM} from '../index';

export default class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {searchInput: DEFAULT_SEARCH_TERM}
    }
    
    render() {
        return (
            <div className="search-bar">
                <div className="search-title">Search YouTube: </div>
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

