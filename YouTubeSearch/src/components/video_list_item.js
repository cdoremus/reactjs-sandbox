import React from 'react';

import { Component } from 'react';

export default class VideoListItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li key={this.props.video.etag}>
				{`${this.props.video.snippet.channelTitle} 
                    - ${this.props.video.snippet.title}`}
			</li>
		);
	}
}
 