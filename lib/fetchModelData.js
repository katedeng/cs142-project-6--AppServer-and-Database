//import Promise from "Promise";

/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 * @returns a Promise that should be filled with the response of the GET request
 * parsed as a JSON object and returned in the property named "data" of an
 * object. If the request has an error, the Promise should be rejected with an
 * object that contains the properties:
 * {number} status          The HTTP response status
 * {string} statusText      The statusText from the xhr request
 */

function fetchModel(url) {
    return new Promise(function(resolve, reject) {
        // Construct the complete URL by concatenating with the base URL
        const completeUrl = 'http://localhost:3000' + url;

        let request = new XMLHttpRequest();
        request.open('GET', completeUrl);
        request.send();

        request.onload = function() {
            if (request.status === 200) {
                // Resolve the promise with the parsed JSON data
                resolve({ data: JSON.parse(request.responseText) });
            } else {
                // Create an Error object with a descriptive message
                const error = new Error(`Request failed with status: ${request.status}`);
                // Reject the promise with the error object
                reject(error);
            }
        };

        // Handle network errors or exceptions
        request.onerror = function() {
            // Create an Error object for network errors
            const error = new Error('Network error or exception occurred.');
            // Reject the promise with the error object
            reject(error);
        };
    });
}

export default fetchModel;