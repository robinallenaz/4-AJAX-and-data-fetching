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

// Function to test the XMLHttpRequest
function testRequest() {
  // Create a new XMLHttpRequest object
  request = new XMLHttpRequest();

  // Check if the request object was created successfully
  if (!request) {
    alert('Failed to create an XMLHttpRequest Object.');
    return false;
  }

  // Set the function to be called when the state of the request changes
  request.onreadystatechange = alertResponse;
  // Open a GET request to 'test.html'
  request.open('GET', 'test.html');
  // Send the request
  request.send();
}

// Function to handle the response from the server
function alertResponse() {
  // Check if the request is complete
  if (request.readyState === XMLHttpRequest.DONE) {
    // Check if the request was successful
    if (request.status === 200) {
      // Alert the response text
      alert(request.responseText);
    } else {
      // Handle errors
      handleError(request.status);
    }
  }
}

// Function to handle errors
function handleError(status) {
  let errorMessage = 'An error occurred: ';
  switch (status) {
    case 404:
      errorMessage += 'File not found (404).';
      break;
    case 500:
      errorMessage += 'Server error (500).';
      break;
    default:
      errorMessage += `Unexpected status: ${status}.`;
  }
  alert(errorMessage);
}

async function logJSONData() {
    const response = await fetch('HTTPS://jsonplaceholder.typicode.com/todos/2');
    const jsonData = await response.json();
    console.log(jsonData);
}

logJSONData();