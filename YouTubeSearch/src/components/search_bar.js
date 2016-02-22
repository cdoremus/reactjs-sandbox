import React from 'react';
import { Component } from 'react';


export default class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {searchInput:''}
    }
    
    render() {
        return (
            <div>
                <input 
                    value={this.state.searchInput}
                    onChange={event => this.setState({searchInput: event.target.value})}/>
                Searching for: {this.state.searchInput}
            </div>
        );
    }
    
}

