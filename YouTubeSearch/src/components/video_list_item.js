import React, {Component} from 'react';

export default class VideoListItem extends Component {
    
	constructor(props) {
		super(props);
        this.video = props.video;
        // this.imageUrl = props.video.snippet.thumbnails.default.url;
	}
    
	render() {
        console.log("Video", this.video);
		return (
			<li className="list-group-item">
                <div className="video-list-media">
                    <div className="media-left">
                        <img className="media-object" 
                            src={this.video.snippet.thumbnails.default.url}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {this.video.snippet.title}
                        </div>
                    </div>
                 </div>
			</li>
		);
	}
}
 