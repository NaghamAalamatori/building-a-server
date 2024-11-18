// Import the 'url' module (available in Node.js for URL-related utilities)
import url from 'url';

// A sample URL string
const urlString = 'https://www.google.com/search?q=hello+world';

// Create a URL object using the 'URL' constructor (native to JavaScript)
// This breaks the URL into components like protocol, host, pathname, search parameters, etc.
const urlObj = new URL(urlString);

// Log the entire URL object to the console
console.log(urlObj);

// Using 'url.format()' to reformat and output the URL object back into a string
// This method is from the 'url' module and converts the URL object into its string representation
console.log(url.format(urlObj));

// Log the current file's URL using 'import.meta.url' (available in ES modules)
// It provides the file URL of the module in which this code resides
console.log(import.meta.url);

// Convert the file URL (import.meta.url) to a file path using 'fileURLToPath()' from the 'url' module
// This function is used to convert a URL object into a file path (useful when working with file system operations)
console.log(url.fileURLToPath(import.meta.url));

// Log the 'search' part of the URL, which contains the query string (e.g., '?q=hello+world')
// The search string includes the '?' and the query parameters
console.log(urlObj.search);

// Create a 'URLSearchParams' object from the search part of the URL
// 'URLSearchParams' allows easy access to query parameters and manipulation of the query string
const params = new URLSearchParams(urlObj.search);

// Get the value of the query parameter 'q' (in this case, 'hello world')
console.log(params.get('q'));

// Add a new query parameter 'limit' with the value '5' to the URL's search params
params.append('limit', '5');

// Remove the 'limit' parameter from the search params (note: it's added and then removed here)
params.delete('limit');

// Log the modified 'URLSearchParams' object to the console
console.log(params);
