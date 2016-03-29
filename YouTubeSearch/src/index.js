import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCImn7DsUikapPFYDE4OrI5GP1heXIS8ns';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
            videos: [],
            selectedVideo: null
        };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({
                videos, 
                selectedVideo: videos[0]
            });
		});
	}

	render () {
    	return (
    		<div>
    			<SearchBar/>
                <VideoDetail video={this.state.selectedVideo} />
                {/* Pass callback function to set selectedVideo to VideoList, who then passes it 
                    onto VideoListItem who calls the callback when it is clicked (onClick). 
                 */}
    			<VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                    videos={this.state.videos}/>
			</div>
    		);    
	}
}

ReactDOM.render(
    <App />, 
    document.querySelector('.container')
    );
