import React from 'react';
import { Component } from 'react';

export default class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
        <input onChange={this.onInputChange}/>
        );
    }
    
    onInputChange(event) {
        console.log(event.target.value);
    }
}

