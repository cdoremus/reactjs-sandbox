import $ from 'jquery';

/**
 * Does Http ajax calls using the jQuery API
 */
export default class Http {

    constructor() {
    }

    get(url, dataType) {
        return $.ajax({
            method: 'GET',
            url: url,
            dataType: dataType /*,
            success: (data_returned) => data = data_returned,
            error: (error) => console.error("jQuery.ajax() error: ", error) */
        });
    }

}