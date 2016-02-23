import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCImn7DsUikapPFYDE4OrI5GP1heXIS8ns';

// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
// 	data.map((video) => {
// 		console.log(video.snippet.channelTitle +  ' - ' + video.snippet.title);
// 	});
// });

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {videos:[]};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({videos});
		});
	}

	render () {
    	return (
    		<div>
    			<SearchBar/>
    			<VideoList videos={this.state.videos}/>
			</div>
    		);    
	}
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
