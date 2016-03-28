import React from 'react';

const VideoListItem = ({ video }) => {
		return (
			<li key={video.etag}>
				{`${video.snippet.channelTitle} - ${video.snippet.title}`}
			</li>
		);
};

export default VideoListItem;
 