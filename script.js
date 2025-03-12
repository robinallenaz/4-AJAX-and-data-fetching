// Improved script demonstrating AJAX with Fetch API
console.log('AJAX!');

///////////////////////////////
// Fetch API Example
///////////////////////////////

// Add an event listener to a button with id 'myBtn'
document.getElementById('myBtn').addEventListener('click', () => {
  fetchData('test.html');
});

// Function to fetch data
function fetchData(url) {
  fetch(url)
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
  console.error(`An error occurred: ${error}`);
  alert(`An error occurred: ${error}`);
}

// Function to log JSON data
async function logJSONData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    handleError(error.message);
  }
}

logJSONData();