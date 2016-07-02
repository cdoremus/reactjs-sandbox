import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import {getYouTubeApiKey} from './components/config';

export const DEFAULT_SEARCH_TERM = 'angular 2';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch(DEFAULT_SEARCH_TERM);
	}

    getApiKey() {
        return getYouTubeApiKey();
    }

    /* Get the YouTube api key from file and then do the YT search. */
    videoSearch(searchTerm) {
        this.getApiKey().then(apiKey => {
            // console.log("Key sent to YTSearch: ", apiKey);
            YTSearch({key: apiKey, term: searchTerm}, (videos) => {
                this.setState({
                    videos,
                    selectedVideo: videos[0]
                });
		    });
        })
        .fail(() => console.log("Video search failed with search term: " + searchTerm));
    }

	render () {
        /* Debounce search for 500 miliseconds to improve performance */
        const videoSearcher = _.debounce(searchTerm => {this.videoSearch(searchTerm)}, 500);
    	return (
    		<div>
    			<SearchBar onSearchTermChange={videoSearcher} />
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
