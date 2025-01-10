// Get the current URL's query string (everything after '?')
const queryString = window.location.search;
const urlInput = document.getElementById("urlInput");

// Create a URLSearchParams object from the query string
const urlParams = new URLSearchParams(queryString);

// Access specific query parameters by name
var urlParam = urlParams.get('url');


// Load the iFrame
alert(urlParam);
urlInput.textContent = urlParam;
loadIframe();
