import React from 'react';
import VideoListItem from './video_list_item';

 const VideoList = (props) => {
		const vids = [
            {etag:'1', snippet:{channelTitle:'video1 title',title:'video1'}},
            {etag:'2', snippet:{channelTitle:'video2 title',title:'video2'}},
            {etag:'3', snippet:{channelTitle:'video3 title',title:'video3'}}
            ];
		const videoItems = 
				vids.map( vid => {
					return (
                      <VideoListItem key={vid.etag} video={vid} />
                    );
	          	});				
            
		return (
            <ul className="col-md-4 list-group">
				{ videoItems }				
			</ul>
            );
}

export default VideoList;