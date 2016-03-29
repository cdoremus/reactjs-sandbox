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
                {/* input is a Controlled Component in that the value only changes 
                    when the state changes */}
                <input 
                    value={this.state.searchInput}
                    onChange={event => this.setState({searchInput: event.target.value})}/>
                Search term: {this.state.searchInput}
            </div>
        );
    }
    
}

