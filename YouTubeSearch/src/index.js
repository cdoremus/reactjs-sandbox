import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDAHh4H48TiIHe_lN1cgQUhab5uaZA';

const App = () => {
    return <div><SearchBar/></div>    
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
