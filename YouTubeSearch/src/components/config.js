import $ from 'jquery';
import Http from './http';

/**
 * Gets a jQuery,deferred object holding the YouTube API key.
 */
export function getYouTubeApiKey() {
    let key_deferred = null;
    let http = new Http();
    key_deferred = http.get('/youtube_api_key.txt', 'text');
    return key_deferred;
}