console.log('AJAX!');

///////////////////////////////
// The XMLHttpRequest Object
///////////////////////////////

// const request = new XMLHttpRequest();

// console.log(request);

// Example
// request.open('GET', 'http://www.example.com/myFile.json', true);

//if this were a POST request, and there is data you need to send to the server you need to set the request header to specify the type of data you're sending
// only for when you send data with a request
// request.setRequestHeader(
//   "Content-Type",
//   "application/json"
// );

// request.send();

/// Simple XHR Requst
let request;

document.getElementById('myBtn').addEventListener('click', testRequest);

function testRequest() {
  request = new XMLHttpRequest();

  if (!request) {
    alert('Failed to create an XMLHttpRequest Object.');
    return false;
  }

  request.onreadystatechange = alertResponse;
  request.open('GET', 'test.html');
  request.send();
}

function alertResponse() {
  // console.log(request.readyState);
  if (request.readyState === XMLHttpRequest.DONE) {
    if (request.status === 200) {
      alert(request.responseText);
    } else {
      alert(
        'The request returned a status other than 200 OK: ' + request.status
      );
    }
  }
}

async function logJSONData() {
    const response = await fetch('HTTPS://jsonplaceholder.typicode.com/todos/2');
    const jsonData = await response.json();
    console.log(jsonData);
}

logJSONData();