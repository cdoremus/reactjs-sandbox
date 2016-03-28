import React from 'react';
import { Component } from 'react';

import VideoListItem from './video_list_item';

export default class VideoList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let vids = [{etag:'1', snippet:{channelTitle:'video1 title',title:'video1'}},{etag:'2', snippet:{channelTitle:'video2 title',title:'video2'}},{etag:'3', snippet:{channelTitle:'video3 title',title:'video3'}}];
		return (<ul className="col-md-4 list-group">
				{vids.map(function(vid) {            	
					return <VideoListItem key={vid.etag} video={vid}/>
	          	})}				
			</ul>);
	}
}
