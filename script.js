// Improved script demonstrating AJAX with Fetch API
console.log('AJAX!');

///////////////////////////////
// Fetch API Example
///////////////////////////////

// Add an event listener to a button with id 'myBtn'
// When the button is clicked, it triggers the fetchData function
document.getElementById('myBtn').addEventListener('click', () => {
  fetchData('test.html');
});

// Function to fetch data from a given URL
// Uses Fetch API to perform an HTTP GET request
function fetchData(url) {
  fetch(url)
    .then(response => {
      // Check if the HTTP request was successful
      if (!response.ok) {
        // Throw an error if the response status is not OK
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Return the response text if successful
      return response.text();
    })
    .then(data => alert(data)) // Alert the fetched data
    .catch(error => handleError(error.message)); // Handle any errors that occur during fetch
}

// Logs the error message to the console and shows an alert
function handleError(error) {
  console.error(`An error occurred: ${error}`);
  alert(`An error occurred: ${error}`);
}

// Function to log JSON data from a remote API
// Demonstrates async/await syntax with error handling
async function logJSONData() {
  try {
    // Fetch data from a sample API endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const jsonData = await response.json(); // Parse the JSON data
  } catch (error) {
    handleError(error.message); // Handle any errors that occur during fetch
  }
}

// Call the function to log JSON data from the API
logJSONData();