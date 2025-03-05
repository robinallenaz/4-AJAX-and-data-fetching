// This script demonstrates the use of AJAX with the XMLHttpRequest object to fetch data from a server.
// It includes examples of GET requests and handling server responses.

console.log('AJAX!');

///////////////////////////////
// The XMLHttpRequest Object
///////////////////////////////

// Create a new XMLHttpRequest object
// const request = new XMLHttpRequest();

// Log the request object to the console
// console.log(request);

// Example of opening a request
// request.open('GET', 'http://www.example.com/myFile.json', true);

// If this were a POST request, and there is data you need to send to the server,
// you need to set the request header to specify the type of data you're sending.
// This is only necessary when sending data with a request.
// request.setRequestHeader(
//   "Content-Type",
//   "application/json"
// );

// Send the request
// request.send();

/// Simple XHR Request
let request;

// Add an event listener to a button with id 'myBtn'
document.getElementById('myBtn').addEventListener('click', testRequest);

// Refactored testRequest function using Fetch API
function testRequest() {
  fetch('test.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => alert(data))
    .catch(error => handleError(error.message));
}

// Function to handle errors
function handleError(error) {
  alert(`An error occurred: ${error}`);
}

async function logJSONData() {
    const response = await fetch('HTTPS://jsonplaceholder.typicode.com/todos/2');
    const jsonData = await response.json();
    console.log(jsonData);
}

logJSONData();